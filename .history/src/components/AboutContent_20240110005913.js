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
        <p className="pp">
          Im a react front - end developer, I create responsive secure websites
          with efficency and precision.{" "}
        </p>{" "}
        <Link to="contact">
          <button className="btn"> CONTACT </button>{" "}
        </Link>{" "}
      </div>{" "}
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={me} className="img" alt="true" />
          </div>{" "}
          <div className="img-stack bottom">
            <img
              src="https://images.unsplash.com/photo-1569748130764-3fed0c102c59?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D"
              className="img"
              alt="true"
            />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default AboutContent;
