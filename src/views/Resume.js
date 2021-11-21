import React from "react";
import Img from "../assets/images/20211023_173933.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faPhoneSquare,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
const Resume = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <h1>Online Resume</h1>
        <a
          href="https://drive.google.com/file/d/1-6z5h8c_XZ6rCOuxaWRkQmCs7Gf9esjV/view?usp=sharing"
          style={{
            textDecoration: "none",
          }}
        >
          <button
            style={{ width: "250px", color: "white" }}
            className="primary-btn"
          >
            <FontAwesomeIcon icon={faFilePdf} size="lg" />
            <span style={{ color: "white" }}>Show PDF Version</span>
          </button>
        </a>
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

      {/* -------------- */}
      <div className="resume">
        <div className="resume-head">
          <div>
            <h1>Ahmed Husam</h1>
            <span style={{ fontSize: "25px" }}>Web Developer</span>
          </div>
          <div className="resume-contact">
            <div>
              <FontAwesomeIcon icon={faPhoneSquare} size="lg" />
              <span style={{ textDecoration: "underline" }}>
                +9647722603299
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "10px" }}
                size="lg"
              />
              <a
                href="mailto:ahmedhusam098@gmail.com"
                style={{ color: "rgb(184,186,189)" }}
              >
                ahmedhusam098@gmail.com
              </a>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faGlobe}
                style={{ marginRight: "10px" }}
                size="lg"
              />
              <a
                href="https://ahmedazawi.github.io/bio-website/"
                style={{ color: "rgb(184,186,189)", fontSize: "14px" }}
              >
                https://ahmedazawi.github.io/bio-website/
              </a>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ marginRight: "13px" }}
                size="lg"
              />
              <span style={{ color: "rgb(184,186,189)", marginLeft: "0" }}>
                Baghdad
              </span>
            </div>
          </div>
        </div>

        {/* -------- */}
        <hr
          style={{
            width: "100%",
            marginTop: "20px",
            border: "none",
            height: "1px",
            backgroundColor: "rgb(49, 48, 48)",
          }}
        />

        <div className="resume-introduction">
          <div>
            <div
              style={{ width: "130px", height: "130px" }}
              className="circle-img"
            >
              <img src={Img} alt="Portifolio-img" />
            </div>
          </div>
          <div className="resume-intro-p">
            <p>
              Front End Developer adept at creating successful websites that
              meet customer needs.produce plans and improve designs for
              usability and functionality.
            </p>
          </div>
        </div>
        <hr
          style={{
            width: "100%",
            marginTop: "20px",
            border: "none",
            height: "1px",
            backgroundColor: "rgb(49, 48, 48)",
          }}
        />

        <div className="resume-description">
          <div className="resume-section-one">
            <div className="resume-title">
              <div></div>
              <h2>WORK EXPERIENCES</h2>
            </div>
            <div>
              <div className="resume-inside-title">
                <big>Front End Developer</big>
                <small>Freelancer | 2021 - Present</small>
              </div>
              <p>
                Currently, I'm Working as a freelance front end developer with a
                small team of freelance developers. My Job includes :
              </p>
              <ul
                style={{
                  fontWeight: "lighter",
                  color: "rgb(184, 186, 189) ",
                }}
              >
                <li>Creating Web front templates.</li>
                <li>Get/Post API data.</li>
              </ul>
            </div>
            <div className="resume-title">
              <div></div>
              <h2>EDUCATION</h2>
            </div>
            <div>
              <big style={{ marginBottom: "20px" }}>
                University of Technology
              </big>
              <br />
              <i style={{ color: "rgb(184,186,189)" }}>
                Bachelor of Computer Science - Software - | 2017 - 2021
              </i>
              <ul
                style={{
                  fontWeight: "lighter",
                  color: "rgb(184, 186, 189) ",
                }}
              >
                <li>
                  Graduation Project : design and implementation Attendance
                  System Management.
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-section-two">
            <div className="resume-title">
              <div></div>
              <h2>Skills</h2>
            </div>
            <div className="section-two-divs">
              <ul>
                <li>
                  Web Development - Front End - with HTML5, CSS3, JavaScript and
                  React Js
                </li>
                <li>
                  Basic knowledge of Microsoft SQL Server , Node Js (Express Js)
                  , Bootstrap 4 and C++.
                </li>
                <li>Web Design</li>
                <li>Microsoft Office 365</li>
                <li>Teamwork</li>
                <li>Social media</li>
              </ul>
            </div>
            <div className="resume-title">
              <div></div>
              <h2>CERTIFICATES & COURSES</h2>
            </div>
            <div className="section-two-divs">
              <ul>
                <li>
                  Certificate of Completion the Microsoft SQL Server Development
                  from udemy
                </li>
                <li>
                  Certificate of Completion the freeCodeCamp 300 hours
                  Javascript Algorithms and Data Structures Certificate. Issued
                </li>
              </ul>
            </div>
            <div className="resume-title">
              <div></div>
              <h2>INTERESTED IN.</h2>
            </div>
            <div className="section-two-divs">
              <ul>
                <li>Programming</li>
                <li>UI/UX</li>
                <li>Web Design</li>
                <li>Tech</li>
                <li>Javascript Frameworks & Libraries</li>
              </ul>
            </div>
            <div className="resume-title">
              <div></div>
              <h2>LANGUAGESS</h2>
            </div>
            <div className="section-two-divs">
              <ul>
                <li>Arabic (Native)</li>
                <li>English (Professional)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
