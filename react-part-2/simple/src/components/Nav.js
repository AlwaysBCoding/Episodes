import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="app-nav">
        <div
          className={this.props.screenIndex === 1 ? "nav-item screen1 active-nav" : "nav-item screen1"}>
          <Link to="/screen1">Screen1</Link>
        </div>
        <div
          className={this.props.screenIndex === 2 ? "nav-item screen2 active-nav" : "nav-item screen2"}>
          <Link to="/screen2">Screen2</Link>
        </div>
        <div
          className={this.props.screenIndex === 3 ? "nav-item screen3 active-nav" : "nav-item screen3"}>
          <Link to="/screen3">Screen3</Link>
        </div>
      </div>
    )
  }

}

module.exports = Nav
