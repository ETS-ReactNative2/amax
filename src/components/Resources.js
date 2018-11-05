import React from "react";
import { NavLink } from "react-router-dom";
import Resource from "./Resource";
import "../css/resources.css";

class Resources extends React.Component {
  handlePathChange = path => {
    const firstPart = path.split("/")[2];
    switch (firstPart) {
      case "leather-care":
        return (
          <Resource
            data={this.props.data.find(obj => {
              return obj.categories[0] === 7;
            })}
          />
        );
      case "furniture-care":
        return (
          <Resource
            data={this.props.data.find(obj => {
              return obj.categories[0] === 6;
            })}
          />
        );
      case "cleaning":
        return (
          <Resource
            data={this.props.data.find(obj => {
              return obj.categories[0] === 4;
            })}
          />
        );
      case "assembly":
        return (
          <Resource
            data={this.props.data.find(obj => {
              return obj.categories[0] === 3;
            })}
          />
        );
      default:
        return null;
    }
  };
  render() {
    const splitPath =
      this.props.path.split("/")[2] === undefined ? false : true;
    return (
      <div className="resources" id="resources">
        <div className={splitPath ? "sub-nav" : "sub-nav"}>
          <div className="headers">Resources</div>
          <div className="line" />
          <div className="linkList">
            <NavLink
              to="/resources/leather-care"
              activeClassName="selectedlink"
            >
              leather care
            </NavLink>
            <NavLink
              to="/resources/furniture-care"
              activeClassName="selectedlink"
            >
              furniture care
            </NavLink>
            <NavLink to="/resources/cleaning" activeClassName="selectedlink">
              cleaning
            </NavLink>
            <NavLink to="/resources/assembly" activeClassName="selectedlink">
              assembly
            </NavLink>
          </div>
        </div>
        <div />
        {this.handlePathChange(this.props.path)}
      </div>
    );
  }
}

export default Resources;
