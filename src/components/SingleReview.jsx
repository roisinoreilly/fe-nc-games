import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewByID } from "../utils/api";

export const SingleReview = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    getReviewByID(review_id).then((singleReview) => {
      setReview(singleReview);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div className="single-review">
          <h2>{review.title}</h2>
                <p key={review.owner}>Author: {review.owner}</p>
                <img src={review.review_img_url} key={review.id} width="200vh" alt={review.title}></img>
                <p key={review.id}>{review.review_body}
                <br></br><br></br>Votes: {review.votes}  / Comments: {review.comment_count}</p>
        </div>
      </>
    );
  }
};