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
        <>
        <div className="card" style={{width: "18rem"}}>
        <img
            src={review.review_img_url}
            key={review.id}
            className="card-img-top"
            alt={review.title}
            style={{width: "18rem", height: "10rem", "objectFit": "cover"}}
          ></img>
          <div className="card-body">
            <h5 className="card-title">{review.title}</h5>
            <p className="card-text">{review.owner}</p>
            <p className="snippet">{review.review_body}</p>
            <Link to={`/review/${review.review_id}`}>Read more</Link>
          </div>
        </div>




          {/* <Link to={`/review/${review.review_id}`}>{review.title}</Link>
          <br></br>
          <img
            src={review.review_img_url}
            key={review.id}
            width="200vh"
            alt={review.title}
          ></img>
          <p>Category: {review.category}</p>
          <p key={review.owner}>Author: {review.owner}</p> */}
        </>
      );
    });
  }
};
