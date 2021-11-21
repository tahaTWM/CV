import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  let indents = [];
  for (let i = 0; i < props.desc.length; i++) {
    indents.push(<li key={i}>{props.desc[i]}</li>);
  }
  let color;
  const iconHandler = () => {
    let id = props.post.id;

    switch (id) {
      case 1:
        color = "rgb(241,221,92)";
        return require("@fortawesome/free-brands-svg-icons").faJsSquare;
      case 2:
        color = "rgb(104,213,248)";
        return require("@fortawesome/free-brands-svg-icons").faReact;
      case 3:
        color = "rgb(220,110,67)";
        return require("@fortawesome/free-brands-svg-icons").faHtml5;

      case 4:
        color = "rgb(197, 91, 197)";
        return require("@fortawesome/free-brands-svg-icons").faBootstrap;

      default:
        return "";
    }
  };

  return (
    <div className="card">
      <FontAwesomeIcon
        icon={iconHandler()}
        size="2x"
        style={{ marginBottom: "10px", color: color }}
      />

      <div className="card-title">{props.post.title}</div>

      <div>
        <ul>{indents}</ul>
      </div>
    </div>
  );
};

export default Card;
