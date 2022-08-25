import { useState } from "react";
import { CommentsCard } from "./CommentsCard";

export const Comments = ({review}) => {
const [isHidden, setIsHidden] = useState(true)

      const handleClick = () => {
        setIsHidden(!isHidden)
      }
    return (
        <>
        <div className="comments-button">
                <button id="show-comments-button" onClick={handleClick}>
          Comments
        </button>
                </div>
                {isHidden ? <CommentsCard review_id={review.review_id} /> : null}
        </>
    )
}