import { Link } from "react-router-dom";
import "./AboutContentSttyles.css";

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
    </div>
  );
};

export default AboutContent;
