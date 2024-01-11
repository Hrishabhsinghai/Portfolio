import { Link } from "react-router-dom";
import "./AboutContentSttyles.css";
import me from "../assets/me.jpeg";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      {" "}
      <div className="left">
        <h1> Who Am I ? </h1>{" "}
        <p>
          Im a react front - end developer.I create responsive secure websites
          with efficancy and precision.{" "}
        </p>{" "}
        <Link to="contact">
          <button className="btn"> Coontact </button>{" "}
        </Link>{" "}
      </div>{" "}
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={me} className="img" alt="true" />
          </div>{" "}
          <div className="img-stack bottom">
            <img src="" className="img" alt="true" />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default AboutContent;
