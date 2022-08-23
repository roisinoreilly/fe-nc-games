import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const [allReviews, setAllReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let {category_slug} = useParams()

    useEffect(() => {
        getAllReviews(category_slug).then((reviews) => {
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
                <div className="review-card">
                <h2 key={review.id}>{review.title}</h2>
                <p>Category: {review.category}</p>
                        <p key={review.owner}>Author: {review.owner}</p>
                        <img src={review.review_img_url} key={review.id} width="200vh" alt={review.title}></img>
                        <p key={review.id}>{review.review_body}</p>
                        <p key={review.id}>Votes: {review.votes}</p>
                        <p key={review.id}>Comments: {review.comment_count}</p>
                </div>
                </>
            )
        })
        )
    }
}