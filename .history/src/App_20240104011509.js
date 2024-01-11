import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import HeroImg from "./components/HeroImg";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/project" element={<Project />} />{" "}
        <Route path="/About" element={<About />} />{" "}
        <Route path="/Contact" element={<Contact />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
