const axios = require("axios")

const api = axios.create({
    baseURL: "https://roisin-oreilly-nc-games.herokuapp.com/"
})

export const getAllReviews = (category_slug) => {
    let queryString = ""
    if (category_slug !== undefined) {
        queryString += `?category=${category_slug}`
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