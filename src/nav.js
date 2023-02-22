  import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg " id="new-bar">
      <div className="container-fluid">
        <p></p>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" id="tag">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about"  id="tag">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact"  id="tag">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
