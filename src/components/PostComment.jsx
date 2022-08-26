import { useState } from "react";
import { postComment } from "../utils/api";
import moment from "moment";

export const PostComment = ({ review_id }) => {
  const [body, setBody] = useState("");
  let username = "jessjelly";

  const handleSubmit = (e) => {
    if (body.length < 10 || username === "") {
      e.preventDefault();
      alert("Comments must be 10 characters or more");
    } else {
        document.getElementById("comment-body").disabled = true;
      postComment(review_id, username, body).then(
        ( comment ) => {
            alert("Comment posted")
          return (
            <>
          <div className="comment-card">
            <p>Username: {comment.author}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <p>{moment(comment.created_at).format("LLL")}</p>
          </div>
        </>
          )
        }
      );
      e.preventDefault();
    }
  };

  return (
    <>
    <p className="add-comment-label">Add a comment</p>
    <form className="add-comment" onSubmit={handleSubmit}>
      <label>
        <textarea
          id="comment-body"
          className="comment-box"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          ></textarea>
      </label>
      <input type="submit" className="submit-button"/>
    </form>
          </>
  );
};
