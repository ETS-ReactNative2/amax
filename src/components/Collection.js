import React from "react";
import { NavLink } from "react-router-dom";
import CollectionList from "./CollectionList";
import "../css/collection.css";
import "../css/main.css";

class Collection extends React.Component {
  handlePathChange = path => {
    const firstPart = path.split("/")[2];
    switch (firstPart) {
      case "sofas":
        return <CollectionList dataId={8} id="Sofas" />;
      case "recliners":
        return <CollectionList dataId={10} id="Recliners" />;
      case "sectionals":
        return <CollectionList dataId={11} id="Sectionals" />;
      case "home-theaters":
        return <CollectionList dataId={12} id="Home Theaters" />;
      default:
        return null;
    }
  };

  render() {
    const splitPath =
      this.props.path.split("/")[2] === undefined ? false : true;
    return (
      <div className="collection" id="collection">
        {/* {console.log(this.state)} */}
        <div className={splitPath ? "sub-nav" : "sub-nav"}>
          <div className="headers title">Collection</div>
          <div className="linkList">
            <NavLink
              to="/collection/sofas"
              className="sofas tertiaryButton"
              activeClassName="selectedlink"
            >
              sofas
              {/* <img src={this.randomImage(Sofas)} /> */}
            </NavLink>
            <NavLink
              to="/collection/recliners"
              className="recliners tertiaryButton"
              activeClassName="selectedlink"
            >
              recliners
            </NavLink>
            <NavLink
              to="/collection/sectionals"
              className="sectionals tertiaryButton"
              activeClassName="selectedlink"
            >
              sectionals
            </NavLink>
            <NavLink
              to="/collection/home-theaters"
              className="homeTheaters tertiaryButton"
              activeClassName="selectedlink"
            >
              home theaters
            </NavLink>
          </div>
        </div>
        {this.handlePathChange(this.props.path)}
      </div>
    );
  }
}

export default Collection;
