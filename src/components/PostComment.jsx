import { useState } from "react";
import { postComment } from "../utils/api";
import moment from "moment";

export const PostComment = ({ review }) => {
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const [postedComment, setPostedComment] = useState({});
  const [err, setErr] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  let username = "jessjelly";

  const handleSubmit = (e) => {
    if (body.length < 10 || username === "") {
      e.preventDefault();
      return setMessage(
        <p className="posted-message">Comments must be 10 characters or more</p>
      );
    } else {
      setMessage("");
      setMessage(<p className="posted-message">Comment posted!</p>);
      setIsDisabled(true);
      postComment(review.review_id, username, body)
        .then((comment) => {
            setPostedComment(comment)
        })
        .catch((err) => {
          setPostedComment({});
          setErr("Something went wrong, try again");
        });
      e.preventDefault();
    }
  };

  const submitBox = (
    <>
      <p className="add-comment-label">Add a comment:</p>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <textarea
            id="comment-body"
            className="comment-box"
            type="text"
            value={body}
            disabled={isDisabled}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>
        <input
          type="submit"
          className="submit-button"
          id="submit-button"
          disabled={isDisabled}
        />
      </form>
    </>
  );

  if (err)
    return (
      <>
        <p>{err}</p>
        {submitBox}
      </>
    );
  else
    return (
      <>
        {(Object.keys(postedComment).length !== 0 && err === null) ? (
          <div className="comment-card">
            <p>Username: {postedComment.author}</p>
            <p>{postedComment.body}</p>
            <p>Votes: {postedComment.votes}</p>
            <p>{moment(postedComment.created_at).format("LLL")}</p>
          </div>
        ) : (
          ""
        )}
        {message}
        {submitBox}
      </>
    );
};
