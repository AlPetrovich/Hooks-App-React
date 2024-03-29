import { Link } from 'react-router-dom'
import { Link as NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">useContext</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink   className={({isActive}) => `nav-link ${isActive ? 'active': ''}`} aria-current="page" to="/">Home</NavLink>
            <NavLink   className={({isActive}) => `nav-link ${isActive ? 'active': ''}`} to="/about">About</NavLink>
            <NavLink   className={({isActive}) => `nav-link ${isActive ? ' active': ''}`} to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};