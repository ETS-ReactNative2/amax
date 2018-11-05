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
            href="https://clients.alexander-kim.com/amax/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            login{" "}
          </a>{" "}
          |
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
