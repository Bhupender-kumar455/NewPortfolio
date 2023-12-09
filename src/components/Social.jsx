import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import x from "../assets/X_logo.png";
library.add(fab);
import "./Social.css";

const Social = () => {
  return (
    <div className="socialparent">
      <ul className="socialchild">
        <li>
          <a href="https://github.com/Bhupender-kumar455">
            <FontAwesomeIcon id="git" icon={["fab", "github"]} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com">
            <FontAwesomeIcon id="linkedin" icon={["fab", "linkedin"]} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <img id="twitter" width="35" src={x} alt="logo" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
