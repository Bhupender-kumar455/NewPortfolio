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
            <span style={{ color: "#fefefe" }}> Software Dev.</span>
          </h1>
          <p>
          As a software developer, I specialize in creating clean and user-friendly experiences. My passion lies in building excellent, SEO-friendly software that positively impacts the lives of others.
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
