import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/dogs">Dogs</Link>
      <Link to="/checkout">My Cart</Link>
    </nav>
  );
};

export default NavBar;
