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
      </ul>{" "}
    </div>
  );
};

export default Navbar;
