'use strict'
import React, { Component, View } from 'react-native'

class StatusBarBackground extends Component {

  render() {
    return (
      <View style={[styles.statusBarBackground, this.props.style || {}]}>
      </View>
    )
  }

}

const styles = React.StyleSheet.create({

  statusBarBackground: {
    height: 20,
    backgroundColor: "white"
  }

})

module.exports = StatusBarBackground
