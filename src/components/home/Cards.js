import React from "react";
import "../../assets/css/routes-files/cards.css";
import data from "../../assets/data/tech-cards.json";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="what-ido">
      <div className="what-ido-title">
        <div></div>
        <h1>What I do</h1>
      </div>
      <div className="what-ido-p">
        <p>
          I have the ability to building software for clients all over the
          world. Below is a quick overview of my main technical skill sets and
          technologies I use. Want to find out more about my experience? Check
          out my online resume and project portfolio.
        </p>
      </div>
      <div className="card-container">
        <div className="cards">
          {data.map((data) => {
            return <Card post={data} key={data.id} desc={data.description} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
