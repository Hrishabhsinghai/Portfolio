import "./HeroImgStyles.css";
import "../index.css";
import IntroImg from "../assets/IntroImg.jpg";
import React from "react";
import { Link } from "react-router-dom";
import reactlogo from "../assets/reactlogo.gif";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>{" "}
      <div className="content">
        <p> HI, I 'M HRISHABH </p> <h1> React Developer. </h1>{" "}
        <div>
          <Link to="/project" className="btn">
            {" "}
            Projects{" "}
          </Link>{" "}
          <Link to="/contact" className="btn btn-light">
            {" "}
            Contact{" "}
          </Link>{" "}
          <img src={reactlogo} alt="logo" />
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default HeroImg;
