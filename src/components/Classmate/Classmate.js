import React from "react";
import "./Classmate.css";

const Classmate = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
    <span className="remove" onClick={() => props.removeFriend(props.id)}></span>
    {
      // add onclick
      // use filter method. give a boolean value of default true to each friend card. once clicked, 
      // run the filter method and remove cards with value true. 
    }
  </div>
);

export default Classmate;
