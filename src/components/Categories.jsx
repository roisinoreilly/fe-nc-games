import { useState, useEffect } from "react";
import { getAllCategories } from "../utils/api";
import { SingleCategory } from "./SingleCategory";

const Categories = () => {
    const [allCategories, setAllCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllCategories().then((categories) => {
            setAllCategories(categories)
            setIsLoading(false)
        })
    }, [])
    if (isLoading) {
        return <p>Loading...</p>
    } else {
    return (allCategories.map((category) => {
        console.log(category)
            return <SingleCategory category={category}></SingleCategory>
        })
    )
}
}

export default Categories;