import React, { Component } from 'react';
import APIService from './services/APIService'
import AlgoliaService from './services/AlgoliaService'
import _ from 'lodash';
import './App.css';

class TweetsTable extends Component {

  render() {
    var TweetRows = []
    _.each(this.props.tweets, (tweet) => {
      var tweet_html = ""
      if(tweet._highlightResult) {
        tweet_html = tweet._highlightResult.text.value
      } else {
        tweet_html = tweet.text
      }
      TweetRows.push(
        <tr key={tweet.id} className="tweetRow">
          <td>{`${tweet.tweetID}`}</td>
          <td dangerouslySetInnerHTML={{__html: tweet_html}}></td>
          <td>{`${tweet.timestamp}`}</td>
          <td>{`${tweet.in_reply_to_status_id}`}</td>
        </tr>
      )
    })

    if(_.isEmpty(this.props.tweets)) {
      return (
        <h1>LOADING...</h1>
      )
    } else {
      return (
        <table className="tweetsTable">
          <thead>
            <tr>
              <th>Tweet ID</th>
              <th>Tweet Text</th>
              <th>Tweet Timestamp</th>
              <th>Tweet Reply ID</th>
            </tr>
          </thead>
          <tbody>
            {TweetRows}
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
      tweets: []
    }
  }

  componentWillMount() {
    APIService.getPlayers()
    .then((data) => {
      this.setState({
        tweets: data
      })
    })
    .catch((error) => {
    })
  }

  _search(event) {
    this.setState({ searchText: event.target.value })
    AlgoliaService.index.search(event.target.value, (error, data) => {
      console.log(data)
      this.setState({ tweets: data.hits })
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
          <TweetsTable tweets={this.state.tweets} />
        </div>
      </div>
    )
  }

}

export default App;
