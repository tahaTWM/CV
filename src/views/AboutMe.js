import React from "react";
import "../assets/css/routes-files/about-me.css";
import Head from "../components/home/Head";
import Cards from "../components/home/Cards";
import Projects from "../components/home/Projects";
const AboutMe = () => {
  return (
    <div className="home">
      <Head />
      <hr
        style={{
          width: "100%",
          marginTop: "80px",
          border: "none",
          height: "1px",
          backgroundColor: "rgb(49, 48, 48)",
        }}
      />
      <Cards />

      <hr
        style={{
          width: "100%",
          marginTop: "80px",
          border: "none",
          height: "1px",
          backgroundColor: "rgb(49, 48, 48)",
        }}
      />

      <Projects />
    </div>
  );
};

export default AboutMe;
