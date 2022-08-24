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
    }
  };

  const downvote = () => {
    if (hasVotedDown === false) {
    setUpvotes((currentVotes) => currentVotes - 1);
    increaseVotes(review.review_id, -1);
    setHasVotedDown(true)
    }
  };

  return (
    <div>
      <button onClick={upvote}>upvote</button>
      <button onClick={downvote}>downvote</button>
      <div>Votes: {upvotes}</div>
    </div>
  );
};
