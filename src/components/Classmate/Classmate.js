import React from "react";
import "./Classmate.css";

class Classmate extends React.Component { 
  
  state = {
    
  };
  
  render () {
    return (

    <div className="card" onClick={props.clickEvent}>
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
    )
  }
}

export default Classmate;
