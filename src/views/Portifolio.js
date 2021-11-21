import React from "react";
import ProjectsCard from "../components/home/PojectsCard";
import data from "../assets/data/projects.json";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const Portifolio = () => {
  return (
    <div>
      <div className="portifolio-header">
        <h1>Portifolio</h1>
        <p>
          Welcome to my online portfolio. I'm taking on freelance work at the
          moment. Want some help building your software?
        </p>
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
      <hr
        style={{
          width: "100%",
          border: "none",
          height: "1px",
          backgroundColor: "rgb(49, 48, 48)",
        }}
      />
      <div>
        <div className="what-ido-title" style={{ margin: "40px 0" }}>
          <div></div>
          <h1>My Projects</h1>
        </div>
        <div className="projects-container">
          <div className="projects-cards">
            {data
              .map((item) => {
                return <ProjectsCard items={item} key={item.id} />;
              })
              .reverse()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
