import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AllReviews } from "./AllReviews";
import { Error } from "./Error";

export const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState()
  const [orderBy, setOrderBy] = useState("desc")
  const [err, setErr] = useState(false)

  let { category_slug } = useParams();

  useEffect(() => {
    getAllReviews(category_slug).then((allReviews) => {
      setAllReviews(allReviews);
      setIsLoading(false);
      setErr(false)
    })
    .catch((err) => {
      setIsLoading(false)
      setErr(true)
    });
  }, [category_slug]);

  const handleSubmit = (e) => {
    e.preventDefault()
    getAllReviews(category_slug, sortBy, orderBy).then((allReviews) => {
      setAllReviews(allReviews);
      setIsLoading(false);
    });
  }

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }
    if (err) {
      return <Error></Error>
     } else {
    return (
      <>
        <form id='sort-reviews' onSubmit={handleSubmit}>
          <label>
            Sort by:
            <select onChange={(e)=>{setSortBy(e.target.value)}}>
              <option value="created_at">Date</option>
              <option value="comment_count">Comments</option>
              <option value="votes">Votes</option>
            </select>
            <select onChange={(e)=>{setOrderBy(e.target.value || 'desc')}}>
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </select>
          </label>
  <button onSubmit={handleSubmit}>Submit</button>
        </form>

        <AllReviews allReviews={allReviews}/>
      </>
    );
  }
};
