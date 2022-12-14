import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewByID } from "../utils/api";
import moment from "moment";
import { Votes } from "./Votes";
import { CommentsButton } from "./CommentsButton";
import { PostComment } from "./PostComment";
import { Error } from "./Error";

export const SingleReview = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(false)

  const { review_id } = useParams();

  useEffect(() => {
    getReviewByID(review_id).then((singleReview) => {
      setReview(singleReview);
      setIsLoading(false);
      setErr(false)
    })
    .catch((err) => {
      setIsLoading(false)
      setErr(true)
    });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  } 
  if (err) {
    return <Error></Error>
  }
  else {
    const formatDate = moment(review.created_at).format("LLLL");
    return (
      <>
        <div className="single-review">
          <h2>{review.title}</h2>
          <p key={review.owner}>
            Author: {review.owner}
            <br></br>Created at: {formatDate}
          </p>
          <img
            src={review.review_img_url}
            key={review.id}
            width="200vh"
            alt={review.title}
          ></img>
          <p key={review.id}>
            {review.review_body}
            <br></br>
            <br></br>Comments: {review.comment_count}
          </p>
          <Votes review={review} />
          <CommentsButton review={review} />
          <PostComment review={review}/>
        </div>
      </>
    );
  }
};
