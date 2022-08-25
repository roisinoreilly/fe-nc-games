import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">

        <Link to="/" className="navbar-text">Home</Link>
        <Link to="reviews" className="navbar-text">All Reviews</Link>
        <Link to="categories" className="navbar-text">Categories</Link>
          </div>
      </nav>
    )
}

export default Nav