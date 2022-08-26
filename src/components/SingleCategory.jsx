import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const SingleCategory = ({category}) => {

  const [singleCategory, setCategory] = useState([])

  let string = category.slug
  string = string.replace(/-/g, ' ');

  let formattedString = <p className="individual-category">{string}</p>

useEffect(() => {
  setCategory(category.slug)
}, [category.slug])

  return (
    <div className='category-link'>
    <Link to={`/reviews/${singleCategory}`}>{formattedString}</Link>
    <p>{category.description}</p>
    </div>
  );
};