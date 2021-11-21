import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="portifolio-header">
        <h1>Contact</h1>
        <p>
          Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send me an email to{" "}
          <a href="mailto:ahmedhusam098@gmail.com">ahmedhusam098@gmail.com</a>{" "}
        </p>
        <br />
        <span style={{ marginBottom: "20px" }}>
          Want to get connected? Follow me on the social channels below.
        </span>
        <div className="contact-icons">
          <a
            style={{ textDecoration: "none", color: "rgb(108, 84, 162)" }}
            href="https://web.facebook.com/ahmed.alazawi.92/"
          >
            <FontAwesomeIcon className="f-icon" icon={faFacebook} size="lg" />
          </a>
          <a
            style={{ textDecoration: "none", color: "rgb(108, 84, 162)" }}
            href="https://www.instagram.com/az.wi98/"
          >
            <FontAwesomeIcon className="f-icon" icon={faInstagram} size="lg" />
          </a>
          <a
            style={{ textDecoration: "none", color: "rgb(108, 84, 162)" }}
            href="https://github.com/ahmedazawi"
          >
            <FontAwesomeIcon className="f-icon" icon={faGithubAlt} size="lg" />
          </a>
          <a
            style={{ textDecoration: "none", color: "rgb(108, 84, 162)" }}
            href="https://www.linkedin.com/in/ahmed-husam-60396620a/"
          >
            <FontAwesomeIcon className="f-icon" icon={faLinkedinIn} size="lg" />
          </a>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          marginTop: "50px",
          border: "none",
          height: "1px",
          backgroundColor: "rgb(49, 48, 48)",
        }}
      />
      <div>
        <form action="mailto:ahmedhusam098@gmail.com" name="EmailForm"></form>
      </div>
    </div>
  );
};

export default Contact;
