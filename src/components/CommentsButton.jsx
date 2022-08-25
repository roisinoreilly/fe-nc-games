import { useState } from "react";
import { AllComments } from "./AllComments";

export const CommentsButton = ({ review }) => {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <div className="comments-button">
        <button id="show-comments-button" onClick={handleClick}>
          Comments
        </button>
      </div>
      {isHidden ? <AllComments review_id={review.review_id} /> : null}
    </>
  );
};
