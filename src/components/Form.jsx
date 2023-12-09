import React from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const Form = () => {
  return (
    <div className="formParent animate__animated animate__fadeInRight animate__delay-1s">
      <h2>Send direct message</h2>
      <form className="grid-form">
        <div className="firstpart">
          <div className="form-row">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              id="email"
              placeholder="your email"
              name="email"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="About the topic"
            required
          />
        </div>
        <div className="form-row">
          <textarea
            id="message"
            placeholder="Your Thoughts"
            name="message"
            required
          ></textarea>
        </div>
        <div className="form-row">
          <button className="moreButton">
            Send
            <span>
              <FontAwesomeIcon className="arrow" icon={faArrowRight} />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
