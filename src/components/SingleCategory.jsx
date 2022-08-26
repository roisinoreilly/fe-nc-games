import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const SingleCategory = ({category}) => {

  const [singleCategory, setCategory] = useState([])

  let string = category.slug
  string = string.replace(/-/g, ' ');

  

useEffect(() => {
  setCategory(category.slug)
}, [category.slug])

  return (
    <div className='category-link'>
    <Link to={`/reviews/${singleCategory}`}>{string}</Link>
    <p>{category.description}</p>
    </div>
  );
};