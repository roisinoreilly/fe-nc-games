import { useState, useEffect } from "react";
import { getAllCategories } from "../utils/api";
import { SingleCategory } from "./SingleCategory";
import { Error } from "./Error";

const Categories = () => {
    const [allCategories, setAllCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(() => {
        getAllCategories().then((categories) => {
            setAllCategories(categories)
            setIsLoading(false)
        })
        .catch(() => {
            setErr(true)
            setAllCategories([])
            setIsLoading(false)
        })
    }, [])
    if (isLoading) {
        return <p>Loading...</p>
    } 
    if (err) {
        return <Error></Error>
    }
    else {
    return (allCategories.map((category) => {
            return <SingleCategory category={category}></SingleCategory>
        })
    )
}
}

export default Categories;