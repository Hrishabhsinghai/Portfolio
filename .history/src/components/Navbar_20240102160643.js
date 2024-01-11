import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import React { useState } from "react";

import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    return ( <
        div className = "header" >
        <
        Link to = "/" > { " " } <
        h1 > Portfolio < /h1>{" "} <
        /Link>{" "} <
        ul className = "nav-menu" >
        <
        li >
        <
        Link to = "/" > Home < /Link>{" "} <
        /li>{" "} <
        li >
        <
        Link to = "/About" > About < /Link>{" "} <
        /li>{" "} <
        li >
        <
        Link to = "/Project" > Project < /Link>{" "} <
        /li>{" "} <
        li >
        <
        Link to = "/Contact" > Contact < /Link>{" "} <
        /li>{" "} <
        /ul>{" "} <
        div className = "hamburger" >
        <
        FaBars size = { 20 }
        style = {
            { color: "#fff" } }
        />{" "} <
        /div>{" "} <
        /div>
    );
};

export default Navbar;