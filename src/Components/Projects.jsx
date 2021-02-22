import React from "react";


class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "Cover To Cover",
          imgUrl: "/images/cover-2-cover.gif",
          description: `A web based application created to enable people to tell their stories 
                  in their daily lives through a series of questions from other users`,
          live: "https://covertocovercapstone.herokuapp.com/",
          code: "https://github.com/jenama/Cover-To-Cover",
        },
        {
          title: "Hand-Me-Down",
          imgUrl: "/images/HMD.gif",
          description: `An application to reduce overconsumption in the fashion industry for
                      users to describe pre-owned items to potential purchasers.`,
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
          imgUrl: "/images/TVB.gif",
          description: `TV BingeList is be a full-stack application where users can post, 
                                comment on, and favorite TV shows that they are binging on.`,
          live: "https://tvbinge.herokuapp.com",
          code: "https://github.com/jenama/TvBinge",
        },
        {
          title:'#NowThatsCap',
          imgUrl:'/images/#NowThatsCap',
          description: `#NowThatsCap, is a frontend web game inspired by black history month
                       for users to get informed about black culture as an entirety while having fun.`,
          live:"https://nowthatscap.netlify.app",
          code: "https://github.com/jenama/now-thats-cap"
        }
      ],
    };
  }
  render() {
    const { projects } = this.state;

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
                      
                      <img
                          className="project-pic"
                          src={project.imgUrl}
                          alt="project"
                        />
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
