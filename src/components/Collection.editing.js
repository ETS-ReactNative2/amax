import React from "react";
import * as utils from "../utils/animations";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NavLink } from "react-router-dom";
import CollectionList from "./CollectionList";
import "../css/collection.css";
import "../css/main.css";

const apibase = "https://clients.alexander-kim.com/amax/wp-json/wp/v2";
class Collection extends React.Component {
  state = {
    data: [],
    loading: true,
    links: []
  };

  onExit = node => {
    if (node) {
      utils.collectionSubOutro(node);
    }
  };
  componentWillMount(){
    axios
      .get(
        `${apibase}/collection?per_page=100`
      )
      .then(data => {
          this.setState({
            data: data.data,
            loading: false
          });
      });
  }
  componentDidMount(){
    this.getCategories();
  }

  getCategories(){
    var categories = [];
    for(var i = 0; i < this.state.data.length; i++){
      if(!categories.includes(this.state.data[i].acf.type_of_item)){
        categories.push(this.state.data[i].acf.type_of_item);
      }
    }
    this.setState({
      links: categories
    })
    console.log(categories);
  }

  render() {
    return (
      <div className="collection" id="collection" style={{ opacity: 0 }}>
        <div className="sub-nav">
          <div className="headers title">
            <NavLink className="mobileBack" to="">
              {""}
            </NavLink>{" "}
            Collection
          </div>
          <div className="line" />
          <div className="linkList">
            {/* <NavLink
              to="/collection/sofas"
              className="sofas tertiaryButton"
              activeClassName="selectedlink"
            >
              sofa
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
              to="/collection/home-theaters"
              className="homeTheaters tertiaryButton"
              activeClassName="selectedlink"
            >
              home theatre
            </NavLink> */}
            {console.log(this.state.links)}
            <NavLink
              to="/collection/home-theaters"
              className="homeTheaters tertiaryButton"
              activeClassName="selectedlink"
            >
              home theatre
            </NavLink>
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
                path="/collection/home-theaters"
                render={() => <CollectionList dataId={12} id="Home Theaters" />}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default Collection;
