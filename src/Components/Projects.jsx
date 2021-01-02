import React from "react";
// import Fontawesome from '@fortawesome/react-fontawesome'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "Cover To Cover",
          imgUrl: "/images/COVER TO COVER GIF.gif",
          description: `A web based application created to enable people to tell their stories 
                  in their daily lives through a series of questions from other users`,
          live: "https://covertocovercapstone.herokuapp.com/",
          code: "https://github.com/jenama/Cover-To-Cover",
        },
        {
          title: "Hand-Me-Down",
          imgUrl: "/images/HandMeDown.gif",
          description: `A web-based application designed to reduce overconsumption in the fashion 
                 industry and support a framework of sustainability by enabling users to provide in-depth detail 
                 describing pre-owned items to potential purchasers.`,
          live: "http://handmedown.herokuapp.com",
          code: "https://github.com/jenama/HandMeDown",
        },
        // {
        //     title: 'InnerCircle',
        //     imgUrl: '/images/inner-circle.png',
        //     description: `Created an innovative social media application alongside a highly skilled team
        //     enabling users to join groups based on mutual interests and foster improved interpersonal connection.`,
        //     live: 'http://localhost:3001/' ,
        //     code: 'https://github.com/jenama/inner-circle-app',
        // },

        {
          title: "TVBinge",
          imgUrl: "/images/tvBinge.gif",
          description: `TV BingeList is be a full-stack application where users can post, 
                                comment on, and favorite TV shows that they are binging on.`,
          live: "https://tvbinge.herokuapp.com",
          code: "https://github.com/jenama/TvBinge",
        },
      ],
    };
  }
  render() {
    const { projects } = this.state;

    //   console.log('projects', projects)
    return (
      <div className="projects-container" id="projects">
        <h2>Projects</h2>
        <Slider>
          {/* {slides.map((slide, index) => <div key={index}>
                <h2>{slide.title}</h2>
                <div>{slide.description}</div>
                </div>)} */}
          {projects.map((project) => {
            return (
              <div className="project-name">
                <h3>{project.title}</h3>
                <div className="project-container">
                  <img
                    className="project-pic"
                    src={project.imgUrl}
                    width="800px"
                    height="300px"
                    alt="project"
                  />
                  <p>{project.description}</p>
                </div>
                <div className="links">
                  <button>
                    <a href={project.live}>live</a>
                  </button>{" "}
                  <button>
                    <a href={project.code}>code</a>
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Projects;
