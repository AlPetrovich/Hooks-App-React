import React from "react";
import { Link as NavLink } from "react-router-dom";

export const NavBar = () => {
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
            <NavLink  activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
            <NavLink  activeClassName="active" className="nav-link" to="/about">About</NavLink>
            <NavLink  activeClassName="active" className="nav-link" to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
