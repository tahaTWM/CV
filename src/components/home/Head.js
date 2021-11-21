import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Head = () => {
  return (
    <>
      <div className="head">
        <div className="head-one">
          <div className="head-text">
            <big style={{ fontSize: "40px" }}>Ahmed Husam</big>
            <small
              style={{
                fontSize: "27px",
                color: "rgb(184,186,189)",
                fontWeight: "lighter",
                marginTop: "10px",
              }}
            >
              Web Developer
            </small>
            <p
              style={{
                color: "rgb(184,186,189)",
                fontWeight: "lighter",
                marginTop: "20px",
                textSpacing: "10px",
                lineHeight: "1.8",
              }}
            >
              I'm a Web developer specialised in frontend development for
              scalable web apps. I write about software development on my blog.
              Want to know how I may help your project? Check out my project
              portfolio and online resume.
            </p>
          </div>
          <div className="head-btn">
            <NavLink
              to="/portifolio"
              style={{
                textDecoration: "none",
                marginRight: "15px",
                marginTop: "10px",
              }}
            >
              <button className="primary-btn">
                <FontAwesomeIcon icon={faArrowCircleRight} size="lg" />
                <span>View Portifolio</span>
              </button>
            </NavLink>
            <NavLink
              to="/resume"
              style={{
                textDecoration: "none",
                marginRight: "15px",
                marginTop: "10px",
              }}
            >
              <button className="secondary-btn">
                <FontAwesomeIcon icon={faFileAlt} size="lg" />
                <span>View Resume</span>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="head-two">
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Head;
