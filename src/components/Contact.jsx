import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";
import "animate.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="header  animate__animated animate__fadeInDown animate__delay-1s">
        <h2 className="back">Contact</h2>
        <span className="front" style={{ color: "white" }}>
          Ge<span style={{ color: "#FFB400" }}>t </span>in
          <span style={{ color: "#ffb400" }}> t</span>ouch
        </span>
      </div>
      <div className="twoPart">
        <div className="a animate__animated animate__fadeInLeft animate__delay-1s">
          <h2 className="shy">Don't be shy XD</h2>
          <p id="shytext">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="address">
            <FontAwesomeIcon className="photu" icon={faMap} />
            <div className="addressDetail">
              <p className="headings">Address point</p>
              <p className="secondp">361/20 Ekta colony,Rohtak,Haryana</p>
            </div>
          </div>
          <div className="address">
            <FontAwesomeIcon className="photu" icon={faMessage} />
            <div className="addressDetail">
              <p className="headings">Email</p>
              <p className="secondp">kbhupender455@gmail.com</p>
            </div>
          </div>
          <div className="address">
            <FontAwesomeIcon className="photu" icon={faPhone} />
            <div className="addressDetail">
              <p className="headings">Phone</p>
              <p className="secondp">+919729640710</p>
            </div>
          </div>
        </div>
        <div className="b">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
