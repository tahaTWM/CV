import React, { useLayoutEffect, useEffect, useState } from "react";
import "../assets/css/sidebar.css";
import Img from "../assets/images/urTask.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptopCode,
  faFileAlt,
  faInbox,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [size, setSize] = useState(0);

  const [active, setActive] = useState(false);
  const mobileMenu = () => {
    setActive(true);
    document.querySelector(".hamburger").classList.add("active");
    document.querySelector(".sidebar").classList.add("active");
    document.querySelector(".sidebar").classList.add("active-2");
    document.querySelector(".sidebar").classList.remove("sidebar-2");
  };

  const closeMobileMenu = () => {
    setActive(false);
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector(".sidebar").classList.remove("active");
    document.querySelector(".sidebar").classList.remove("active-2");
    setTimeout(() => {
      document.querySelector(".sidebar").classList.add("sidebar-2");
    }, 500);
  };
  // screen size method
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  useEffect(() => {
    if (size <= 768) {
      document.querySelector(".navbar").classList.add("bar-active");
    } else {
      document.querySelector(".navbar").classList.remove("bar-active");
    }
  });

  return (
    <header className="header">
      <div className="navbar">
        <div
          onClick={active ? closeMobileMenu : mobileMenu}
          className="hamburger"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className="sidebar sidebar-2">
        <div className="section-one">
          <h2 style={{ fontWeight: "bold", margin: "30px 0" }}>Ahmed Husam</h2>
          <div className="circle-img">
            <img src={Img} alt="Portifolio-img" />
          </div>
          <p>
            Hi, my name is Ahmed Husam and I'm a Web Developer. Welcome to my
            personal website!
          </p>
          <div className="social-circles">
            <div>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://web.facebook.com/ahmed.alazawi.92/"
              >
                <FontAwesomeIcon
                  className="f-icon"
                  icon={faFacebook}
                  size="lg"
                />
              </a>
            </div>
            <div>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.instagram.com/az.wi98/"
              >
                <FontAwesomeIcon
                  className="f-icon"
                  icon={faInstagram}
                  size="lg"
                />
              </a>
            </div>
            <div>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://github.com/ahmedazawi"
              >
                <FontAwesomeIcon
                  className="f-icon"
                  icon={faGithubAlt}
                  size="lg"
                />
              </a>
            </div>
            <div>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.linkedin.com/in/ahmed-husam-60396620a/"
              >
                <FontAwesomeIcon
                  className="f-icon"
                  icon={faLinkedinIn}
                  size="lg"
                />
              </a>
            </div>
            <div>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.linkedin.com/in/ahmed-husam-60396620a/"
              >
                <FontAwesomeIcon
                  className="f-icon"
                  icon={faLinkedinIn}
                  size="lg"
                />
              </a>
            </div>
          </div>
        </div>
        <hr
          style={{
            width: "90%",
            marginTop: "20px",
            border: "none",
            height: "1px",
            backgroundColor: "rgb(86,95,107)",
          }}
        />
        <div className="section-two">
          <NavLink
            className="section-nav-link"
            exact
            to="/"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "800",
              color: "rgb(108, 84, 162)",
            }}
          >
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faUser}
                size="1x"
                style={{ paddingRight: "3px" }}
              />
              <small>About Me</small>
            </div>
          </NavLink>

          <NavLink
            className="section-nav-link"
            to="/portifolio"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "800",
              color: "rgb(108, 84, 162)",
            }}
          >
            <div className="nav-link">
              <FontAwesomeIcon icon={faLaptopCode} size="1x" />
              <small>Portifolio</small>
            </div>
          </NavLink>

          <NavLink
            className="section-nav-link"
            to="/resume"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "800",
              color: "rgb(108, 84, 162)",
            }}
          >
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faFileAlt}
                size="1x"
                style={{ paddingRight: "5px" }}
              />
              <small>Resume</small>
            </div>
          </NavLink>

          <NavLink
            className="section-nav-link"
            to="/contact"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "800",
              color: "rgb(108, 84, 162)",
            }}
          >
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faInbox}
                size="1x"
                style={{ paddingRight: "3px" }}
              />
              <small>Contact</small>
            </div>
          </NavLink>
        </div>
        <hr
          style={{
            width: "90%",
            border: "none",
            height: "1px",
            backgroundColor: "rgb(86,95,107)",
          }}
        />
        <NavLink
          to="/contact"
          style={{
            textDecoration: "none",
            color: "white",
            transition: "all 0.3s",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "120px",
              height: "40px",
              backgroundColor: "rgb(108, 84, 162)",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: "4px",
              fontWeight: "300",
              marginBottom: "30px",
            }}
          >
            <FontAwesomeIcon icon={faPaperPlane} size="1x" />
            <h4>Hire Me</h4>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Sidebar;
