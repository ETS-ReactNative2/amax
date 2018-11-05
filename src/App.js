import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Collection from './components/Collection'
import Resources from './components/Resources'
import Craftmanship from './components/Craftmanship'
import Home from './components/Home'
import Topbar from './components/Topbar'
import Contact from './components/Contact'
import './css/main.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import * as utils from './utils/animations'
import Bottombar from './components/Bottombar'
import axios from 'axios'
import Retailers from './components/retailers/Retailers'

const apibase = 'https://clients.alexander-kim.com/amax/wp-json/wp/v2'
class App extends Component {
  state = {
    posts: {
      data: []
    },
    contactOpen: false,
    retailersOpen: false
  }
  componentWillMount = () => {
    //string literal => having a variable with a part of a string
    axios.get(`${apibase}/posts`).then(data => {
      this.setState({
        posts: {
          data: data.data
        }
      })
    })
  }
  openContact = () => {
    if (this.state.contactOpen === false) {
      this.setState({
        contactOpen: true,
        retailersOpen: false
      })
    } else {
      this.setState({
        contactOpen: false
      })
    }
  }
  openRetailers = () => {
    if (this.state.retailersOpen === false) {
      this.setState({
        retailersOpen: true,
        contactOpen: false
      })
    } else {
      this.setState({
        retailersOpen: false
      })
    }
  }
  checkOnHome = () => {
    if (this.props.location.pathname === '/') {
      return true
    }
    return false
  }
  render() {
    return (
      <div className="App">
        <Topbar />
        <div className="main-container">
          <Navbar onHome={this.checkOnHome()} />
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              timeout={500}
              classNames="fade"
              onEnter={node =>
                utils.introPageAnimation(node, this.props.location.pathname)
              }
              onExit={node =>
                utils.outroPageAnimation(node, this.props.location.pathname)
              }
            >
              <Switch location={this.props.location}>
                <Route exact path="/" component={Home} />
                <Route path="/collection" component={Collection} />
                <Route
                  path="/about"
                  render={() => (
                    <About
                      data={this.state.posts.data.find(obj => {
                        return obj.categories[0] === 2
                      })}
                    />
                  )}
                />
                <Route
                  path="/craftmanship"
                  render={() => (
                    <Craftmanship
                      data={this.state.posts.data.find(obj => {
                        return obj.categories[0] === 5
                      })}
                    />
                  )}
                />
                <Route
                  path="/resources"
                  render={() => (
                    <Resources
                      data={this.state.posts.data.filter(obj => {
                        if (
                          obj.categories[0] === 5 ||
                          obj.categories[0] === 2
                        ) {
                          return false
                        }
                        return true
                      })}
                    />
                  )}
                />
              </Switch>
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
    )
  }
}

export default App
