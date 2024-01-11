import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, settColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      settColor(true);
    } else {
      settColor(false);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        {" "}
        <h1> Portfolio </h1>{" "}
      </Link>{" "}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
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
      <div className="hamburger" onClick={handleClick}>
        {" "}
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
