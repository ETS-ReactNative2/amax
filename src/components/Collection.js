import React from "react";
import * as utils from "../utils/animations";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NavLink } from "react-router-dom";
import CollectionList from "./CollectionList";
import "../css/collection.css";
import "../css/main.css";

class Collection extends React.Component {
  onExit = node => {
    if (node) {
      utils.collectionSubOutro(node);
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="collection" id="collection" style={{ opacity: 0 }}>
          <div className="nav-cont">
            <div className="sub-nav">
              <div className="headers title">
                <NavLink className="mobileBack" to="">
                  {""}
                </NavLink>
                Collection
              </div>
              <div className="line" />
              <div className="linkList">
                <NavLink
                  to="/collection/sofas"
                  className="sofas tertiaryButton"
                  activeClassName="selectedlink"
                >
                  sofa
                  {/* <img src={this.randomImage(Sofas)} /> */}
                </NavLink>
                <NavLink
                  to="/collection/recliners"
                  className="recliners tertiaryButton"
                  activeClassName="selectedlink"
                >
                  recliner
                </NavLink>
                <NavLink
                  to="/collection/sectionals"
                  className="sectionals tertiaryButton"
                  activeClassName="selectedlink"
                >
                  sectional
                </NavLink>
                <NavLink
                  to="/collection/home-theatre"
                  className="hometheatre tertiaryButton"
                  activeClassName="selectedlink"
                >
                  home theatre
                </NavLink>
              </div>
            </div>
          </div>
          <TransitionGroup>
            <CSSTransition
              key={this.props.history.location.key}
              timeout={500}
              classNames="fade"
              onExit={node => this.onExit(node)}
            >
              <Switch>
                <Route
                  path="/collection/sofas"
                  render={() => <CollectionList dataId={8} id="Sofas" />}
                />
                <Route
                  path="/collection/recliners"
                  render={() => <CollectionList dataId={10} id="Recliners" />}
                />
                <Route
                  path="/collection/sectionals"
                  render={() => <CollectionList dataId={11} id="Sectionals" />}
                />
                <Route
                  path="/collection/home-theatre"
                  render={() => <CollectionList dataId={16} id="Hometheatre" />}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </React.Fragment>
    );
  }
}

export default Collection;
