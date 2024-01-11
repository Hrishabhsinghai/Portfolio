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
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default WorkCard;
