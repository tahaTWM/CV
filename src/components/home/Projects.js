import React from "react";
import ProjectsCard from "./PojectsCard";
import data from "../../assets/data/projects.json";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
  const state = [];
  for (let i = 0; i < data.length; i++) {
    state.push(data[i]);
  }
  const cards = state.reverse().slice(0, 4);

  return (
    <div>
      <div className="what-ido-title" style={{ margin: "40px 0" }}>
        <div></div>
        <h1>Latest Projects</h1>
      </div>
      <div className="projects-container">
        <div className="projects-cards">
          {cards.map((item) => {
            return <ProjectsCard items={item} key={item.id} />;
          })}
        </div>

        <NavLink
          to="/Portifolio"
          style={{
            textDecoration: "none",
            marginTop: "50px",
          }}
        >
          <button id="por-btn" className="primary-btn">
            <FontAwesomeIcon icon={faArrowCircleRight} size="lg" />
            <span>View Portifolio</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Projects;
