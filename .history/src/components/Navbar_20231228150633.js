import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import React from "react";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <h1> Portfolio </h1>{" "}
      </Link>{" "}
      <ul>
        <li>
          <Link to="/"> Home </Link>{" "}
        </li>{" "}
        <li>
          <Link to="/"> About </Link>{" "}
        </li>{" "}
        <li>
          <Link to="/"> Project </Link>{" "}
        </li>{" "}
        <li>
          <Link to="/"> Contact </Link>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
};

export default Navbar;
