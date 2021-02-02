import React from "react";
import { Link } from 'react-router-dom'
// import Skills from "./Skills";

const About = props => {
  return (
   
    <div className="about-container section" id="about">
      <h1>About me</h1>
      <div className='content'>
          {/* <h3>Welcome! I'm Johanne Enama</h3> */}
          <img className='left' src='/images/JohanneEnamacopy.jpeg'/>
          <p className = 'right'>
            I am a Full Stack Web developer, multilingual, Football(soccer), and music lover based in NYC.
            I enjoy learning human languages and  computer languages. I also love solving problems and a  
            competitive trivia player and my strongest suite is Geography. Before becoming an Engineer I 
            worked as a program assistant at a non-profit planning events for the community and working 
            with kids in that community. My journey as a developer started at Pursuit a where 
            I learned technical skills. Learning to program was unlike anything I had ever done or attempted to do.
            
          </p>
              
      </div>
     
        
     

    </div>
  );
};

export default About;
