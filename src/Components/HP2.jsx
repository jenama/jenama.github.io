import React from "react";
import { render } from "react-dom";
import Typical from "react-typical";
import { Link } from "react-router-dom";

class Homepage2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      github: "https://github.com/jenama",
      linkedIn: "https://www.linkedin.com/in/johanne-enama",
      // email: 'johanneenama@pursuit.org'
    };
  }

  render() {
    return (
      <div className="home-page">
        <div className="bg-img"></div>
        <div className="intro">
          <div className="myemoji-container">
            <img
              className="myemoji"
              src="/images/myemoji.png"
              width="500px"
            />
          </div>
          <div className='text-container'>
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
  }
}
export default Homepage2;
