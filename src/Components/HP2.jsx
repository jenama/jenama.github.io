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
        <div className='intro'>
          <h1>Hi, I'm Johanne Enama</h1>
          <div className='likes'>
            I am,
            <Typical
              steps={[
                " A Fullstack Web developer 💻",
                3000,
                " A Geography Lover🌍",
                3000,
                " Multilingual(English, French, Spanish)",
                3000,
                " A Football Lover(the one where you actually play with your feet)⚽️",
                3000,
                " An FC Barcelona(Mostly Messi) and Manchester City Supporter🏟",
                3000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </div>
          <div>
            <a href='https://www.linkedin.com/in/johanne-enama-6b318a189/'>
              <svg viewBox="0 0 128 128">
                <path class="cls-1" d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3Z"></path><path class="cls-2" d="M21.06,48.73H39.17V107H21.06Zm9.06-29a10.5,10.5,0,1,1-10.5,10.49,10.5,10.5,0,0,1,10.5-10.49"></path><path class="cls-2" d="M50.53,48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53Z"></path>
              </svg>
            </a>
          </div>
            </div>
      </div>
    );
  }
}
export default Homepage2;
