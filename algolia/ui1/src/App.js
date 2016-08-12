import React, { Component } from 'react';
import APIService from './services/APIService'
import AlgoliaService from './services/AlgoliaService'
import _ from 'lodash';
import './App.css';
import algolia from 'algoliasearch'

var AlgoliaClient = algolia("4L9CPAAAZI", "c2fa5539341be8b38a94d152c9bf6553")

class PlayersTable extends Component {

  render() {
    var PlayerRows = []
    _.each(this.props.players, (player) => {
      PlayerRows.push(
        <tr key={player.id} className="playerRow">
          <td>{`${player.display_name}`}</td>
          <td>{`${player.team_display_name}`}</td>
          <td>{`${player.position}`}</td>
          <td>{`${player.points}`}</td>
        </tr>
      )
    })

    if(_.isEmpty(this.props.players)) {
      return (
        <h1>LOADING...</h1>
      )
    } else {
      return (
        <table className="playersTable">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Team</th>
              <th>Position</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {PlayerRows}
          </tbody>
        </table>
      )
    }
  }

}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchText: "",
      players: []
    }
  }

  componentWillMount() {
    APIService.getPlayers()
    .then((data) => {
      this.setState({
        players: data
      })
    })
    .catch((error) => {
    })
  }

  _search(event) {
    this.setState({ searchText: event.target.value })
    AlgoliaClient.initIndex("nba_players").search(event.target.value, {facets: 'position'}, (error, data) => {
      console.log(data)
      this.setState({ players: data.hits })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <h1>Natural Language Search with Algolia</h1>
          <input
            className="search"
            type="text"
            value={this.state.searchText}
            onChange={this._search.bind(this)} />
        </div>
        <div className="App-Content">
          <PlayersTable players={this.state.players} />
        </div>
      </div>
    )
  }

}

export default App;
