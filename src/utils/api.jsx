const axios = require("axios")

const api = axios.create({
    baseURL: "https://roisin-oreilly-nc-games.herokuapp.com/"
})

export const getAllReviews = () => {
    return api.get("/api/reviews").then((res) => {
        return res.data.reviews
    })
}

