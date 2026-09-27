import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-nav">
      <div className="nav-topline">
        <Link className="brand" to="/" aria-label="Velvora home"><img src="/images/Logo.jpg" alt="Velvora" /></Link>
        <div className="nav-links"><Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/contact">Contact Us</Link></div>
      </div>
    </nav>
  );
}

export default Navbar;