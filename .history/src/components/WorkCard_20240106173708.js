import "./WorkCardStyles.css";

import React from "react";
import tictactoe from "../assets/tictactoe.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="project-card">
      <img src={tictactoe} alt="image" />
      <h2 className="project-title"> Project title </h2>{" "}
      <div className="pro-details">
        <p> lorem ipsum this is the paragraph </p>{" "}
        <div className="pro-btns">
          <NavLink to="https://ticctacctoeegame.surge.sh/" className="btn">
            {" "}
            View{" "}
          </NavLink>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default WorkCard;
