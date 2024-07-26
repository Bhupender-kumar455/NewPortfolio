import React from "react";
import "./About.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faSuitcase,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css";
const About = () => {
  const barColor = "#FFB400";
  const textColor = "white";

  const customStyles = {
    path: {
      stroke: barColor,
    },
    text: {
      fill: textColor,
      fontSize: '14px', // Adjust the font size here
    },
  };
  return (
    <div className="aboutparent ">
      <div className="about">
        <div className="header animate__animated animate__fadeInDown animate__delay-1s">
          <h2 className="back">Resume</h2>
          <span className="front" style={{ color: "white" }}>
            About <span style={{ color: "#FFB400" }}>me</span>
          </span>
        </div>

        <div className="content">
          <div className="contentFirst animate__animated animate__fadeInLeft animate__delay-1s">
            <h1
              style={{
                textAlign: "left",
                color: "#747474",
                marginLeft: "20px",
                marginBottom: "20px",
              }}
            >
              Personal Information
            </h1>
            <div className="details">
              <p>
                First Name:<span>Bhupender</span>
              </p>
              <p>
                Last Name:<span>Kumar</span>
              </p>
              <p>
                Age: <span>22 Years</span>
              </p>
           
              <p>
                Phone: <span>+919729640710</span>
              </p>
              <p>
                Github:
                <a
                  id="git"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                  href="https://github.com/Bhupender-kumar455"
                >
                  Bhupender
                </a>
              </p>
              <p>
                Nationality:<span>Indian</span>
              </p>
            
              <p>
                Email:<span>kbhupender455@gmail.com</span>
              </p>
              <p>
                Language:<span>English,Hindi</span>
              </p>
              <p>
                Address:
                <span>
                  Harayana,
                  Rohtak
                </span>
              </p>
            </div>
            <div className="downloadButton">
              <a
                href={"./assets/Bhupender Resume.pdf"}
                download={"Bhupender Resume.pdf"}
              >
                Download CV
              </a>
              <FontAwesomeIcon className="icon" icon={faDownload} />
            </div>
          </div>
          <div className="contentSecond  animate__animated animate__fadeInDown animate__delay-1s">
            <h1>my skills</h1>
            <div className="circles">
              <CircularProgressbar
                className="skills"
                value={100}

                text="React.js"
               styles={customStyles}
               />
              <CircularProgressbar
                className="skills"
                value={100}
                text="Node.js"
                styles={customStyles}
                
                />
              <CircularProgressbar
                className="skills"
                text="Express.js"
                value={100}
                styles={customStyles}
                />
              <CircularProgressbar
                className="skills"
                value={100}
                text="MongoDB"
                styles={customStyles}
                />
              <CircularProgressbar
                className="skills"
                value={100}
                text="Asp.net"
                styles={customStyles}
                />
              <CircularProgressbar
                className="skills"
                value={100}
                text=".Net Core "
                styles={customStyles}
                />
              <CircularProgressbar
                className="skills"
                value={100}
                text="Git"
                styles={customStyles}
                />
              <CircularProgressbar
                className="skills"
                value={100}
                text="MySQL"
                styles={customStyles}
                />
            </div>
          </div>
        </div>
        <div className="expAndeducation">
          <h1 className="heading">Expreince and Educations</h1>
          <div className="both">
            <div className="exp animate__animated animate__fadeInDown animate__delay-1s">

            <div className="card">
                <div className="logo">
                  <FontAwesomeIcon icon={faSuitcase} />
                </div>
                <div className="work">
                  <p style={{ textAlign: "left" }}>2024  - Present</p>
                  <h3>
                    Software Dev. - <strong>Softcron Techology</strong>
                  </h3>
                  <p>
                  I'm well-versed in building and optimizing applications of all kinds, including ERP, CRM, CMS and e-commerce. React.js, Node.js and Express.js are my strong points when it comes to the web development of dynamic, scalable solutions. I have a background in backend technologies like MongoDB and MS SQL that complements my frontend skills well. And with Git GitHub, ASP.NET.NET Core we get robust maintainable code. Based on the practice of flexible design from Bootstrap and how to do project management through Jira, I pursue high-quality software which meets or even surpasses expectations from those who commission me.
                  </p>
                  <p className="extralarge" style={{ margin: "10px 0" }}>
                    <strong>Tech used: </strong>
                   React.js ,Node.js ,Express.js , MongoDB ,Git&Github ,Asp.net, .netCore , MSql,Bootstsrap & Jira 
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="logo">
                  <FontAwesomeIcon icon={faSuitcase} />
                </div>
                <div className="work">
                  <p style={{ textAlign: "left" }}>2023 June - 2023 Augest </p>
                  <h3>
                    Full-Stack Developer - <strong>Corizo</strong>
                  </h3>
                  <p>
                    I developed a dynamic and responsive website utilizing HTML
                    CSS, and JavaScript I Utilized the Express.js framework for
                    efficient server-side development
                  </p>
                  <p className="extralarge" style={{ margin: "10px 0" }}>
                    <strong>Tech used:</strong>
                    HTML,CSS,JS,Express.js,Node.js,MongoDB
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="logo">
                  <FontAwesomeIcon icon={faSuitcase} />
                </div>
                <div className="work">
                  <p style={{ textAlign: "left" }}>2023 July </p>
                  <h3>Microsoft learn Student Ambassador Event</h3>
                  <p>
                    I actively engaged in the Microsoft Learn Student Ambassador
                    Event, acquiring invaluable expertise in the creation of
                    professional resumes through the utilization of HTML and CSS
                    . I also learned about GitHub that how to deploy our HTML
                    CSS project to GitHub
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <strong>Tech used:</strong>
                    HTML,CSS and Github
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="logo">
                  <FontAwesomeIcon icon={faSuitcase} />
                </div>
                <div className="work">
                  <p style={{ textAlign: "left" }}>2023 feb </p>
                  <h3>
                    Web developer <strong>Oasis infobyte</strong>
                  </h3>
                  <p>
                    Developed a visually appealing and responsive landing page
                    for a game during an internship. Utilized HTML and CSS to
                    design and implement the page.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <strong>Tech used:</strong>
                    HTML,CSS and Github
                  </p>
                </div>
              </div>
            </div>
            <div className="education animate__animated animate__fadeInDown animate__delay-1s">
              <div className="card">
                <div className="logo">
                  <FontAwesomeIcon icon={faUniversity} />
                </div>
                <div className="work">
                  <p style={{ textAlign: "left" }}>2019 - 2022 </p>
                  <h3>
                    Graduation
                    <strong> BCA(Bachlor of computer application)</strong>
                  </h3>
                  <p style={{ margin: "10px 0" }}>
                    <strong>Tech used:</strong>
                    Java,C++,C,Data Structure,OOPS,Visual Basic,Computer
                    Networking
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="logo">
                  <FontAwesomeIcon icon={faUniversity} />
                </div>
                <div className="work">
                  <p style={{ textAlign: "left" }}>2017 - 2019 </p>
                  <h3>
                    High School
                    <strong>HBSE(Arts & Math) </strong>
                  </h3>
                  <p>Tagore Seinor Scandary School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
