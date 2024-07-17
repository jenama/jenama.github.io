import React from "react";
import picture from "../assets/images/johannePicture copy.jpeg";

const About =() => {
  return (
    <div className="about-container section" id="about">
      <h1>About me</h1>
      <div className='content'>
          {/* <h3>Welcome! I'm Johanne Enama</h3> */}
          <img className='left' src={picture} alt='pic'/>
          <p className = 'right'>
            I am a Full Stack Web developer fluent in 3 spoken languages(English, French, and Spanish) based in NYC. 
            I am also a football(soccer) fanatic, who enjoys music, solving problems and a competitive trivia player 
            especially if the topic is Geography. Before becoming an Engineer I worked as a program assistant at a non-profit 
            planning events and working with kids in my community. I also volunteered as a soccer coach every Saturday morning 
            for 2 months during the fall season. I was fortunate to learn technical skills and professional skills 
            at Pursuit which has a 9 percent acceptance rate.
          </p>
       </div>
  </div>
  );
};

export default About;
