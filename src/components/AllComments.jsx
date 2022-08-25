import moment from "moment";
import { useState, useEffect } from "react";
import { getComments } from "../utils/api";

export const AllComments = ({ review_id }) => {
  const [allComments, setAllComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(review_id).then((comments) => {
      setAllComments(comments);
      setIsLoading(false);
    });
  }, [review_id]);
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return allComments.map((comment) => {
      return (
        <>
          <div className="comment-card">
            <p>Username: {comment.author}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <p>{moment(comment.created_at).format("LLL")}</p>
          </div>
        </>
      );
    });
  }
};
