import React, { useState } from "react";
import { Link } from "react-router-dom/dist";
import "./Nav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css";
const Nav = () => {
  return (
    <div>
      <nav className="navParent animate__animated animate__fadeInRight animate__delay-1s">
        <Link to="/" className="links">
          <span className="text">Home</span>
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link to="/about" className="links">
          <span className="text">About</span>
          <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>

        <Link to="/portfolio" className="links">
          <span className="text">Work</span>
          <FontAwesomeIcon icon={faBriefcase} className="icon" />
        </Link>
        <Link to="/contact" className="links">
          <span className="text">Contact</span>
          <FontAwesomeIcon icon={faMessage} className="icon" />
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
