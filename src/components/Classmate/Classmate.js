import React from "react";
import "./Classmate.css";

const Classmate = props => (
  // onclick needs cb function with props.incrementscore here because it is getting that info from from parent. 
  <div className="card" onClick={ () => props.clickEvent(props.id, props.clickedStatus)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong className="text-center">{props.name}</strong> 
        </li>
      </ul>
    </div>
    
    {
      // add onclick
      // use filter method. give a boolean value of default true to each friend card. once clicked, 
      // run the filter method and remove cards with value true. 
    }
  </div>
);

export default Classmate;
