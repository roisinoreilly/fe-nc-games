import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="reviews" className="nav-link">All Reviews</Link>
        <Link to="categories" className="nav-link">Categories</Link>
      </nav>
    )
}

export default Nav