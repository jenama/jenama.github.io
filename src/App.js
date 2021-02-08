import React from "react";
import Navbar from "./Components/Navbar";
import Homepage2 from "./Components/HP2";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { Helmet } from "react-helmet";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Navbar />
        <Homepage2 />
        <About />
        <Skills />
        <Projects />
        {/* <Contact/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
