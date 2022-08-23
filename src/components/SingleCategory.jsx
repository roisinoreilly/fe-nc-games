import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const SingleCategory = ({category_slug}) => {

  const [category, setCategory] = useState([])

useEffect(() => {
  setCategory(category_slug)
})
  return (
    <Link to={`/reviews/${category}`}>{category}</Link>
  );
};