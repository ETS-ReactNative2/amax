import React from "react";
// import { NavLink } from "react-router-dom";
import "../css/main.css";

class Bottombar extends React.Component {
  render() {
    return (
      <div className="bottombar">
        <div className="botButton" onClick={this.props.contact}>
          contact
        </div>
        <div className="right">
          <a
            className="botButton"
            href="http://amaxleather.com/dealers"
            target="_blank"
            rel="noopener noreferrer"
          >
            login{" "}
          </a>{" "}
          <span className="linespan">|</span>
          <div className="botButton" onClick={this.props.retailers}>
            {" "}
            retailers
          </div>
        </div>
      </div>
    );
  }
}

export default Bottombar;
