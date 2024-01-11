import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import React from "react";

import { faBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <h1> Portfolio </h1>{" "}
      </Link>{" "}
      <ul className="nav-menu">
        <li>
          <Link to="/"> Home </Link>{" "}
        </li>{" "}
        <li>
          <Link to="/About"> About </Link>{" "}
        </li>{" "}
        <li>
          <Link to="/Project"> Project </Link>{" "}
        </li>{" "}
        <li>
          <Link to="/Contact"> Contact </Link>{" "}
        </li>{" "}
      </ul>{" "}
      <div className="hamburger">
        <FaBars />
      </div>{" "}
    </div>
  );
};

export default Navbar;
