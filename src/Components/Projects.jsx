import React from "react";
import covertocovercapstone from "../assets/images/cover-2-cover.gif";
import handMeDown from "../assets/images/HandMeDown.gif";
import tvBinge from "../assets/images/TVB.gif";
import nowThatsCap from "../assets/images/NowThatsCap.gif"


class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      projects: [
        {
          title: "Hand-Me-Down",
          src: {handMeDown},
          description: `An application to reduce overconsumption in the fashion industry for
                      users to describe pre-owned items to potential purchasers.`,
          live: "http://handmedown.herokuapp.com",
          code: "https://github.com/jenama/HandMeDown",
        },
        {
          title: "Cover To Cover",
          src: "/images/cover-to-cover.webm",
          description: `A web based application created to enable people to tell their stories 
                  in their daily lives through a series of questions from other users`,
          live: "https://covertocovercapstone.herokuapp.com/",
          code: "https://github.com/jenama/Cover-To-Cover",
        },
        
        {
          title: "TVBinge",
          src: "/images/TVBinge.webm",
          description: `TV BingeList is be a full-stack application where users can post, 
                                comment on, and favorite TV shows that they are binging on.`,
          live: "https://tvbinge.herokuapp.com",
          code: "https://github.com/jenama/TvBinge",
        },
        {
          title:'#NowThatsCap',
          src:{nowThatsCap},
          description: `#NowThatsCap, is a web game inspired by black history month
                       for users to get informed about black culture as an entirety while having fun.`,
          live:"https://nowthatscap.netlify.app",
          code: "https://github.com/jenama/now-thats-cap"
        }
      ],
    };
  }

  geProjects =() =>{
    this.setState({ isLoading: true })
    this.setState({ isLoading: false})
  }
  componentDidMount() {
    this.geProjects();
  }
  
  render() {
    const { projects, isLoading } = this.state;

    //   console.log('projects', projects)
    return (
      
      <div className="projects-container section" id="projects">
      
        <h1>Projects</h1>
        <div className='projects-cards'>
          {projects.map((project) => {
            return (
              <div className="project-card project-item">
                {/* <XMasonry>
                  <XBlock> */}
                   
                      <h3>{project.title}</h3>
                      
                      <div
                        className="project-pic"
                        controls muted autoPlay
                      >
                        {isLoading ? <img src={project.src} alt="loading..." /> : null}
                    
                      </div>
                      <p>{project.description}</p>
                      
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
           </div>   
      </div>
    );
  }
}

export default Projects;
