import React from "react";
import "./Header.css";

const Header = props => (
<nav className="navbar sticky-top navbar-light bg-light ml-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <span className="text-center">Clicky Game</span></div>
                <div className="col-md-4">
                    <span className="text-center">Click an image to begin!</span></div>
                <div className="col-md-4 text-center">
                    <span>Score :
          <span> {props.score} </span>
                    </span>
                    <span> | Top Score:
          <span> {props.topScore}</span>
                    </span></div>
            </div>
        </div>





    </nav>
);

export default Header;
