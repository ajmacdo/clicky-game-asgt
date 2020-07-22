import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.location} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.shuffleCards(props.id)} className="shuffle">
        𝘅
      </span>
    </div>
  );
}

export default Card;
