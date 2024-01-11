import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import React from "react";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/"> </Link> <h1> Portfolio </h1>
    </div>
  );
};

export default Navbar;
