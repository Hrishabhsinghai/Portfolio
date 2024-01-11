import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/src/routes/Home.js" element={<Home />} />{" "}
        <Route path="./routes/Project.js" element={<Project />} />{" "}
        <Route path="./routes/About.js" element={<About />} />{" "}
        <Route path="./routes/Contact.js" element={<Contact />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
