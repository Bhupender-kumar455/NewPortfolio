import React from "react";
import "./Home.css";
import "animate.css";
import profilePhoto from "../assets/pink-circle-background-designify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="home-parent animate__animated animate__slideInUp animate__delay-1s">
      <div className="first">
        <img className="profile" src={profilePhoto} alt="" />
        <div className="texts ">
          <h1 className="name" style={{ color: "#ffa001" }}>
            ~ Hi, I'm Bhupender.
            <br />
            <span style={{ color: "#fefefe" }}> Web Developer</span>
          </h1>
          <p>
            I'm a front‑end developer focused on crafting clean & user‑friendly
            experiences, I am passionate about building excellent software that
            improves the lives of those around me.
          </p>
          <a className="moreButton" href="/about">
            More about me!
            <span>
              <FontAwesomeIcon className="arrow" icon={faArrowRight} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
