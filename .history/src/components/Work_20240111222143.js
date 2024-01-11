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
      <div className="github"> My Github Repositery </div>{" "}
      <button className="git-btn">
        {" "}
        <NavLink> Click to view </NavLink>{" "}
      </button>{" "}
    </div>
  );
};

export default Work;
