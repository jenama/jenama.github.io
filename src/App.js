import React from "react";
import { Route, Switch, Link} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage2 from "./Components/HP2";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import "./App2.css";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        {/* <Homepage2/>  */}
        <About/>
        <Skills/>
        <Projects/>
        <div className='nav-bar'>
            
      
        </div>
          <Switch>
            {/* <Route exact path="/" component={Homepage2}/> */}
          {/* <Route path="/about" component={About}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/projects" component={Projects}/>  */}
        </Switch>  
      </div>
    );
  }
}

export default App;
