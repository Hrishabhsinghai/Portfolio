import "./WorkCardStyles.css";

import React from "react";
import tictactoe from "../assets/tictactoe.png";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"> Projects </h1>{" "}
      <div className="project-container">
        <div className="project-card">
          <img src={tictactoe} alt="image" />
          <h2 className="project-title"> Project title </h2>{" "}
          <div className="pro-details">
            <p> lorem ipsum this is the paragraph </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default WorkCard;
