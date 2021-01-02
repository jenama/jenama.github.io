import React from "react";
import { Link } from 'react-router-dom'
// import Skills from "./Skills";

const About = props => {
  return (
   
    <div className="about-container" id="about">
      <h1>About me</h1>
      <div className = 'right'>
          <h3>Welcome! I'm Johanne Enama</h3>
              <p>
                  I am a Full Stack Web developer, multilingual, Football(soccer), and music lover.
                Becoming a developer was not something I considered until 2019. My journey started with 
                Pursuit where I learned technical skills. Learning to program was unlike anything I had ever done or attempted to do.
                It was a very tedious and difficult but oddly enough I did not hate it.
                I am glad I stuck with it, because I was able to learn and acquire skills 
                that I can use.
              </p>
      </div>
      <div>
        <img src='/image/johanneEnamacopy.jpeg'/>
      </div>

    </div>
  );
};

export default About;
