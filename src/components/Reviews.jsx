import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";

export const Reviews = () => {
    const [allReviews, setAllReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllReviews().then((reviews) => {
            setAllReviews(reviews)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p className="loading">Loading...</p>
    } else {
        return (
            allReviews.map((review) => {
            return (
                <>
                <div className="review">
                <ul key={review.title}>
                    <li key={review.title}>
                        <li>{review.title}</li>
                        <li>{review.owner}</li>
                        <img src={review.review_img_url} width="200vh" alt={review.title}></img>
                        <li>{review.review_body}</li>
                        <li>Votes: {review.votes}</li>
                        <li>Comments: {review.comment_count}</li>
                    </li>
                </ul>
                </div>
                </>
            )
        })
        )
    }
}