import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from "react";
import { NavLink } from "react-router-dom";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"> Projects </h1>{" "}
      <div className="project-container">
        {" "}
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}{" "}
      </div>{" "}
      <div className="git-container">
        <h1 className="github"> My Github Repositery </h1>{" "}
        <div className="git-btns">
          {" "}
          <NavLink to="https://github.com/Hrishabhsinghai">
            {" "}
            Click to view{" "}
          </NavLink>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Work;
