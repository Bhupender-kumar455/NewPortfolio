import React from "react";
import "./Portfolio.css";
import chatapp from "../assets/chatapp.png";
import movie from "../assets/movie.png";
import youtube from "../assets/youtube.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="header animate__animated animate__fadeInDown animate__delay-1s">
        <h2 className="back">Works</h2>
        <span className="front" style={{ color: "white" }}>
          P<span style={{ color: "#FFB400" }}>o</span>rtf
          <span style={{ color: "#FFB400" }}>o</span>li
          <span style={{ color: "#FFB400" }}>o</span>
        </span>
      </div>

      <div className="myworks">
        <div className="personal">
          <h2 className="animate__animated animate__fadeInDown animate__delay-1s" style={{ color: "white", textTransform: "uppercase" }}>
            Personal projects
          </h2>
        </div>
        <div className="workss">
          <div className="one">
            <img
              className=" animate__animated animate__fadeInDown animate__delay-1s"
              src={chatapp}
              alt="logo"
            />
            <div className="about  animate__animated animate__fadeInDown animate__delay-1s">
              <h3 className="appName">Chat App</h3>
              <p className="appAbout">
                A simple chat app built with React & firebase tools
                <br />
                <p>
                  Where Multiple users can interact with each other
                  simultaneously
                </p>
                <ul className="appList">
                  <li>Real time messaging</li>
                  <li>Authentication</li>
                  <li>Cloud storage</li>
                  <li>Real time database</li>
                  <li>
                    Fully responsive to all screen
                    <br /> size
                  </li>
                  <li>Deployed on Vercel</li>
                </ul>
              </p>
              <a
                className="appLink"
                target="_blank"
                href="https://chatapp-lime-nine.vercel.app/"
              >
                Live site checkout!{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </span>
              </a>
            </div>
          </div>

          <div className="one">
            <img
              className=" animate__animated animate__fadeInDown animate__delay-1s"
              src={movie}
              alt="logo"
            />
            <div className="about  animate__animated animate__fadeInDown animate__delay-1s">
              <h3 className="appName">Movie App</h3>
              <p className="appAbout">
                A simple Movie app built with React & API
                <br />
                <p>Where users can interact 240 list of movies</p>
                <ul className="appList">
                  <li>Categorise option by genres</li>
                  <li>Authentication</li>
                  <li>Paginations</li>
                  <li>Live Search</li>
                  <li>
                    Fully responsive to all screen
                    <br /> size
                  </li>
                  <li>Deployed on Vercel</li>
                </ul>
              </p>
              <a
                className="appLink"
                target="_blank"
                href="https://pictureverse-nine.vercel.app/"
              >
                Live site checkout!{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </span>
              </a>
            </div>
          </div>

          <div className="one">
            <img
              className=" animate__animated animate__fadeInDown animate__delay-1s"
              src={youtube}
              alt="logo"
            />
            <div className="about animate__animated animate__fadeInDown animate__delay-1s">
              <h3 className="appName">Youtube clone</h3>
              <p className="appAbout">
                A full youtube clone app built with React & Rapid API
                <br />
                <p>Where users can interact all videos of youtube here</p>
                <ul className="appList">
                  <li>Categorise option by topics</li>
                  <li>Youtube Search</li>
                  <li>React videoPlayer</li>
                  <li>Related video feature</li>
                  <li>
                    Fully responsive to all screen
                    <br /> size
                  </li>
                  <li>Deployed on Netlify</li>
                </ul>
              </p>
              <a
                className="appLink"
                target="_blank"
                href="https://startling-frangipane-03fa89.netlify.app/"
              >
                Live site checkout!{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
