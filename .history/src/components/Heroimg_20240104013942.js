import "./HeroImgStyles.css";
import IntroImg from "../assets/IntroImg.jpg";
import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="" hero>
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>{" "}
      <div className="content">
        <p> HI, I 'M A FRESHER</p> <h1> React Developer </h1>{" "}
        <div>
          <Link to="/project" className="btn">
            {" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default HeroImg;
