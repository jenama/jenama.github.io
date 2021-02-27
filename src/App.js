import React from "react";
import Navbar from "./Components/Navbar";
import Homepage2 from "./Components/HP2";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Homepage2 />

      <About />

      <Projects />

      <Skills />

      {/* <Contact/> */}
      <Footer />
    </div>
  );
};

export default App;
