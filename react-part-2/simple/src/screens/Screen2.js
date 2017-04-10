import React, { Component } from 'react'
import EtherService from '../services/EtherService'
import _ from 'lodash'

class Screen2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      etherPrices: []
    }
  }

  componentWillMount() {
    this.props.eventEmitter.emit("navigateScreen", {screenIndex: 2})

    EtherService.getEtherPrice()
    .then((data) => {
      this.setState({etherPrices: data})
    })
  }

  render() {
    var TableRows = []

    _.each(this.state.etherPrices, (etherPrice) => {
      TableRows.push(
        <tr key={etherPrice.day}>
          <td>{etherPrice.day}</td>
          <td>{etherPrice.price}</td>
        </tr>
      )
    })

    return (
      <div className="screen screen2">
        <h1>SCREEN 2 DATA</h1>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {TableRows}
          </tbody>
        </table>
      </div>
    )
  }

}







module.exports = Screen2
