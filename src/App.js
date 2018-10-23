import React, { Component } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Collection from "./components/Collection";
import Resources from "./components/Resources";
import Craftmanship from "./components/Craftmanship";
import Home from "./components/Home";
import Topbar from "./components/Topbar";
import Contact from "./components/Contact";
import "./css/main.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import * as utils from "./utils/animations";
import Bottombar from "./components/Bottombar";
import axios from "axios";
import Retailers from "./components/retailers/Retailers";

const apibase = "http://clients.alexander-kim.com/amax/wp-json/wp/v2";
class App extends Component {
  state = {
    path: "",
    posts: {
      data: []
    },
    contactOpen: false,
    retailersOpen: false
  };
  componentDidMount() {
    this.setState({
      path: this.props.history.location.pathname
    });
  }
  componentDidUpdate() {
    const { pathname } = this.props.history.location;
    if (this.state.path !== pathname) {
      this.setState({
        path: pathname
      });
    }
  }
  componentWillMount = () => {
    //string literal => having a variable with a part of a string
    axios.get(`${apibase}/posts`).then(data => {
      this.setState({
        posts: {
          data: data.data
        }
      });
    });
  };
  openContact = () => {
    if (this.state.contactOpen === false) {
      this.setState({
        contactOpen: true
      });
    } else {
      this.setState({
        contactOpen: false
      });
    }
  };
  openRetailers = () => {
    if (this.state.retailersOpen === false) {
      this.setState({
        retailersOpen: true
      });
    } else {
      this.setState({
        retailersOpen: false
      });
    }
  };
  handlePathChange = path => {
    const firstPart = path.split("/")[1];
    switch (firstPart) {
      case "about":
        return (
          <About
            data={this.state.posts.data.find(obj => {
              return obj.categories[0] === 2;
            })}
          />
        );
      case "collection":
        return <Collection path={this.state.path} />;
      case "craftmanship":
        return (
          <Craftmanship
            data={this.state.posts.data.find(obj => {
              return obj.categories[0] === 5;
            })}
          />
        );
      case "resources":
        return (
          <Resources
            path={this.state.path}
            data={this.state.posts.data.filter(obj => {
              if (obj.categories[0] === 5 || obj.categories[0] === 2) {
                return false;
              }
              return true;
            })}
          />
        );
      case "":
        return <Home />;
      default:
        return <div />;
    }
  };
  checkOnHome = () => {
    if (this.state.path === "/") {
      return true;
    }
    return false;
  };
  render() {
    return (
      <div className="App">
        <Topbar />
        <div className="main-container">
          <Navbar onHome={this.checkOnHome()} />
          <TransitionGroup>
            <CSSTransition
              key={this.state.path}
              timeout={this.state.path.split("/").length < 3 ? 500 : 0}
              classNames="fade"
              onEnter={node => utils.introPageAnimation(node, this.state.path)}
              onExit={node => utils.outroPageAnimation(node, this.state.path)}
            >
              {this.handlePathChange(this.state.path)}
            </CSSTransition>
          </TransitionGroup>
          <Contact
            open={this.state.contactOpen ? this.state.contactOpen : false}
            contact={this.openContact}
          />
          <Retailers
            open={this.state.retailersOpen ? this.state.retailersOpen : false}
            retailers={this.openRetailers}
          />
        </div>
        <Bottombar contact={this.openContact} retailers={this.openRetailers} />
      </div>
    );
  }
}

export default App;
