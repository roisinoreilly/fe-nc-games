import { useState } from "react";
import { AllComments } from "./AllComments";

export const CommentsButton = ({ review }) => {
  const [isHidden, setIsHidden] = useState(false);

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
      {isHidden ? <AllComments review={review} /> : null}
    </>
  );
};
