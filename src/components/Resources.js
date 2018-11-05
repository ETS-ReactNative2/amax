import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Switch, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Resource from './Resource'
import '../css/resources.css'

class Resources extends React.Component {
  render() {
    return (
      <div className="resources" id="resources" style={{ opacity: 0 }}>
        <div className="sub-nav">
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
        {this.props.data && (
          <TransitionGroup>
            <CSSTransition>
              <Switch>
                <Route
                  path="/resources/leather-care"
                  render={() => (
                    <Resource
                      data={this.props.data.find(obj => {
                        return obj.categories[0] === 7
                      })}
                    />
                  )}
                />
                <Route
                  path="/resources/furniture-care"
                  render={() => (
                    <Resource
                      data={this.props.data.find(obj => {
                        return obj.categories[0] === 6
                      })}
                    />
                  )}
                />
                <Route
                  path="/resources/cleaning"
                  render={() => (
                    <Resource
                      data={this.props.data.find(obj => {
                        return obj.categories[0] === 4
                      })}
                    />
                  )}
                />
                <Route
                  path="/resources/assembly"
                  render={() => (
                    <Resource
                      data={this.props.data.find(obj => {
                        return obj.categories[0] === 3
                      })}
                    />
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      </div>
    )
  }
}

export default Resources
