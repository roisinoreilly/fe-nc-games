import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const SingleCategory = ({category_slug}) => {

  const [category, setCategory] = useState([])

useEffect(() => {
  setCategory(category_slug)
}, [category_slug])
  return (
    <div className='category-link'>
    <Link to={`/reviews/${category}`}>{category}</Link>
    </div>
  );
};