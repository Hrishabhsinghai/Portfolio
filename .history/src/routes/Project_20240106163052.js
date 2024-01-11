import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import workCard from "../components/workCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Here are some of my Projects" />
      <workCard />
      <Footer />
    </div>
  );
};

export default Project;
