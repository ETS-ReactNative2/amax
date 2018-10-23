import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className={this.props.onHome ? "navbar" : "navbar sub-page"}>
        <NavLink to="">
          <img
            src={require("../images/logo.png")}
            className="logo-image"
            alt="logo"
          />
        </NavLink>
        <div className="navitem">
          <NavLink to="/about" activeClassName="selectedlink">
            about
          </NavLink>
        </div>
        <div className="navitem">
          <NavLink to="/collection" activeClassName="selectedlink">
            collection
          </NavLink>
        </div>
        <div className="navitem">
          <NavLink to="/craftmanship" activeClassName="selectedlink">
            craftmanship
          </NavLink>
        </div>
        <div className="navitem">
          <NavLink to="/resources" activeClassName="selectedlink">
            resources
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
