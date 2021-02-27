import React from "react";
import Typical from "react-typical";

const Homepage2 = () => {
  return (
    <div className="home-page">
      <div className="bg-img"></div>
      <div className="intro">
        <div className="myemoji-container">
          <img
            className="myemoji"
            src="/images/myemoji.png"
            width="500px"
            alt="emoji"
          />
        </div>
        <div className="text-container">
          <h1>Hi,</h1>
          <h2>I'm Johanne Enama</h2>
          <div className="likes">
            I am,
            <Typical
              steps={[
                " A Fullstack Web developer 💻",
                3000,
                " A Geography and Trivia Lover🌍",
                3000,
                " Multilingual(English, French, Spanish)",
                3000,
                " A Football enthusiast(the one where you actually play with your feet)⚽️",
                3000,
                " An FC Barcelona(Mostly Messi) and Manchester City Supporter🏟",
                3000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage2;
