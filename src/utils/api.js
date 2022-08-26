const axios = require("axios")

const api = axios.create({
    baseURL: "https://roisin-oreilly-nc-games.herokuapp.com/"
})

export const getAllReviews = (category_slug, sortBy, orderBy) => {
    let queryString = ""
    if (category_slug !== undefined || orderBy !== undefined || sortBy !== undefined) {
        queryString += "?"
    }
    if (category_slug !== undefined) {
        queryString += `category=${category_slug}`
    }
    if (category_slug !== undefined && sortBy !== undefined) {
        queryString += "&"
    }
    if (sortBy !== undefined) {
        queryString += `sort_by=${sortBy}`
    }
    if (orderBy !== undefined && category_slug === undefined && sortBy === undefined) {
        queryString += `order_by=${orderBy}`
    }
    if (orderBy !== undefined && (category_slug !== undefined || sortBy !== undefined)) {
        queryString += `&order_by=${orderBy}`
    }
    return api.get(`/api/reviews/${queryString}`).then((res) => {
        return res.data.reviews
    })
}

export const getAllCategories = () => {
    return api.get("/api/categories").then((res) => {
        return res.data.categories
    })
}

export const getReviewByID = (review_id) => {
    if (review_id !== undefined) {
    return api.get(`/api/reviews/${review_id}`).then((res) => {
        return res.data.review
    })
}}

export const increaseVotes = (review_id, votes) => {
    return api.patch(`api/reviews/${review_id}`, {inc_votes: votes})
    .then((res) => {
        return res.data.review.votes
    })
}

export const getComments = (review_id) => {
    return api.get(`api/reviews/${review_id}/comments`)
    .then((res) => {
        return res.data.comments
    })
}

export const postComment = (review_id, username, body) => {
    return api.post(`api/reviews/${review_id}/comments`, {username, body})
    .then((res) => {
        return res.data.comment
    })
}

export const deleteComment = (comment_id) => {
    return api.delete(`api/comments/${comment_id}`)
    .then((res) => {
        return res.data
    })
}