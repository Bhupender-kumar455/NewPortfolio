import React, { useRef } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0hchxm5', 
      'template_rilpcrf', 
      form.current, 
      'mN22isfbetm9lf-PF'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      e.target.reset();
      toast("Email Sended! Wait for Response");
    }).catch((error) => {
      console.log('FAILED...', error);
      toast("There is an error,Try Social Media to contact me!");
    });

    e.target.reset(); 
  };

  return (
    <div className="formParent animate__animated animate__fadeInDown animate__delay-1s">
      <h2>Send direct message</h2>
      <form ref={form} className="grid-form" onSubmit={sendEmail}>
        <div className="firstpart">
          <div className="form-row">
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              id="email"
              placeholder="Your email"
              name="from_email"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <input
            type="text"
            id="subject"
            name="topic"
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
          <button className="moreButton" type="submit">
            Send
            <span>
              <FontAwesomeIcon className="arrow" icon={faArrowRight} />
            </span>
          </button>
          <div className="social">
            <a href="https://github.com/Bhupender-kumar455" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="github" icon={faGithub} />
            </a>
            <a href="https://twitter.com/Bhupend38010058" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="twitter" icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/bhupender-kumar-06b368237/"
              target="_blank" rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
