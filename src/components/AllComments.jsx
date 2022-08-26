import moment from "moment";
import { useState, useEffect } from "react";
import { getComments } from "../utils/api";
import { deleteComment } from "../utils/api";
import React from "react";

export const AllComments = ({ review }) => {
  const [allComments, setAllComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const refreshPage = () => {
    window.parent.location = window.parent.location.href;
  };
  let username = "jessjelly"

  const handleClick = (comment) => {
    return function () {
      if (window.confirm("Comment will be deleted, is that okay?")) {
        deleteComment(comment.comment_id).then((res) => {
          setAllComments((currState) => [...currState]);
          alert("Comment deleted");
          refreshPage();
        });
      }
    };
  };

  useEffect(() => {
    getComments(review.review_id).then((comments) => {
      setAllComments(comments);
      setIsLoading(false);
    });
  }, [review.review_id]);
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
            {comment.author === username ? <button id={comment.comment_id} onClick={handleClick(comment)}> 
              Delete
            </button> : ""}
          </div>
        </>
      );
    });
  }
};
