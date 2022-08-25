import { useState } from "react";
import { increaseVotes } from "../utils/api";

export const Votes = ({ review }) => {
  const [upvotes, setUpvotes] = useState(review.votes);
  const [hasVotedUp, setHasVotedUp] = useState(false);
  const [hasVotedDown, setHasVotedDown] = useState(false);
  const [err, setErr] = useState(null);

  const upvote = () => {
    if (hasVotedUp === false && hasVotedDown) {
      setUpvotes((currentVotes) => currentVotes + 1);
      setErr(null);
      increaseVotes(review.review_id, 2).catch((err) => {
        setUpvotes((currentVotes) => currentVotes - 1);
        setErr("Something went wrong");
      });
      setHasVotedUp(true);
      setHasVotedDown(false);
      document.getElementById("upvote-button").disabled = false;
      document.getElementById("downvote-button").disabled = false;
    }

    if (hasVotedUp === false) {
      setUpvotes((currentVotes) => currentVotes + 1);
      setErr(null);
      increaseVotes(review.review_id, 1).catch((err) => {
        setUpvotes((currentVotes) => currentVotes - 1);
        setErr("Something went wrong");
      });
      setHasVotedUp(true);
      setHasVotedDown(false);
      document.getElementById("upvote-button").disabled = true;
      document.getElementById("downvote-button").disabled = false;
    }
  };

  const downvote = () => {
    if (hasVotedDown === false && hasVotedUp === false && upvotes > 0) {
      setUpvotes((currentVotes) => currentVotes - 1);
      setErr(null);
      increaseVotes(review.review_id, -1).catch((err) => {
        setUpvotes((currentVotes) => currentVotes + 1);
        setErr("Something went wrong");
      });

      document.getElementById("downvote-button").disabled = true;
      setHasVotedDown(true);
      document.getElementById("upvote-button").disabled = false;
    }

    if (hasVotedDown === false && hasVotedUp && upvotes > 0) {
      setUpvotes((currentVotes) => currentVotes - 1);
      setErr(null);
      increaseVotes(review.review_id, -1).catch((err) => {
        setUpvotes((currentVotes) => currentVotes + 1);
        setErr("Something went wrong");
      });
      setHasVotedDown(false);
      setHasVotedUp(false);
      document.getElementById("upvote-button").disabled = false;
      document.getElementById("downvote-button").disabled = false;
    }
    if (upvotes <= 0) {
      document.getElementById("downvote-button").disabled = true;
    }
  };
  if (err) return <p>{err}</p>;
  else
    return (
      <div>
        <button id="upvote-button" onClick={upvote}>
          Upvote
        </button>
        <button id="downvote-button" onClick={downvote}>
          Downvote
        </button>
        <p>Votes: {upvotes}</p>
      </div>
    );
};
