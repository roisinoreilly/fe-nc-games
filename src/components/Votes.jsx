import { useState } from "react";
import { increaseVotes } from "../utils/api";

export const Votes = ({ review }) => {
  const [upvotes, setUpvotes] = useState(review.votes);
  const [hasVotedUp, setHasVotedUp] = useState(false)
  const [hasVotedDown, setHasVotedDown] = useState(false)

  const upvote = () => {
    if (hasVotedUp === false) {
    setUpvotes((currentVotes) => currentVotes + 1);
    increaseVotes(review.review_id, 1);
    setHasVotedUp(true)
    setHasVotedDown(false)
    document.getElementById("upvote-button").disabled = true
    document.getElementById("downvote-button").disabled = false
    }
  };

  const downvote = () => {
    if (hasVotedDown === false && hasVotedUp === false && upvotes >0) {
    setUpvotes((currentVotes) => currentVotes - 1);
    increaseVotes(review.review_id, -1);
    document.getElementById("downvote-button").disabled = true
    setHasVotedDown(true)
    document.getElementById("upvote-button").disabled = false
    }

    if (hasVotedDown === false && hasVotedUp && upvotes >0) {
        setUpvotes((currentVotes) => currentVotes - 1);
    increaseVotes(review.review_id, -1);
    setHasVotedDown(false)
    setHasVotedUp(false)
    document.getElementById("upvote-button").disabled = false
    document.getElementById("downvote-button").disabled = false
    }
    if (upvotes <=0) {
        document.getElementById("downvote-button").disabled = true
    }
  };

  return (
    <div>
      <button id="upvote-button" onClick={upvote}>upvote</button>
      <button id="downvote-button" onClick={downvote}>downvote</button>
      <p>Votes: {upvotes}</p>
    </div>
  );
};
