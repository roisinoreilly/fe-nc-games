import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { category_slug } = useParams();

  useEffect(() => {
    getAllReviews(category_slug).then((allReviews) => {
      setAllReviews(allReviews);
      setIsLoading(false);
    });
  }, [category_slug]);
  if (isLoading) {
    return <p className="loading">Loading...</p>;
  } else {
    return allReviews.map((review) => {
      return (
        // <SingleReview review={review}></SingleReview>
        <>        
        <Link to={`/review/${review.review_id}`}>{review.title}</Link>
        <br></br>
        <img src={review.review_img_url} key={review.id} width="200vh" alt={review.title}></img>
        <p>Category: {review.category}</p>
        <p key={review.owner}>Author: {review.owner}</p>
        </>




        // <>
        // <div className="review-card">
        // <h2 key={review.id}>{review.title}</h2>
        // <p>Category: {review.category}</p>
        //         <p key={review.owner}>Author: {review.owner}</p>
        //         <img src={review.review_img_url} key={review.id} width="200vh" alt={review.title}></img>
        //         <p key={review.id}>{review.review_body}</p>
        //         <p key={review.id}>Votes: {review.votes}</p>
        //         <p key={review.id}>Comments: {review.comment_count}</p>
        // </div>
        // </>
      );
    });
  }
};
