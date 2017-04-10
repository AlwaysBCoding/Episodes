import React, { Component } from 'react'

class Screen3 extends Component {

  componentWillMount() {
    this.props.eventEmitter.emit("navigateScreen", {screenIndex: 3})
  }

  render() {
    return (
      <div className="screen screen3">
        <h1>SCREEN 3 DATA</h1>
      </div>
    )
  }

}

module.exports = Screen3
