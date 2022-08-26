import { Link } from "react-router-dom";
import moment from "moment";

export const AllReviews = ({allReviews}) => {
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
              <p className="created-at">{moment(review.created_at).format("LL")}</p>
              <p className="author-text">Author: {review.owner}</p>
              <p className="votes-comments-text">Votes: {review.votes}  /  Comments: {review.comment_count}</p>
              <p className="snippet">{review.review_body}</p>
              <Link to={`/review/${review.review_id}`}>Read more</Link>
            </div>
          </div>
          </>
        );
      });
    }
