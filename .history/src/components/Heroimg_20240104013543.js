import "./HeroImgStyles.css";
import IntroImg from "../assets/IntroImg.jpg";
import React from "react";

const HeroImg = () => {
  return (
    <div className="" hero>
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>{" "}
    </div>
  );
};

export default HeroImg;
