'use strict'
import React, { AppRegistry, Component, TabBarIOS } from 'react-native'
import AppNavigator from './app/navigation/AppNavigator'
import Icon from 'react-native-vector-icons/FontAwesome'

class abcrn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "tab1"
    }
  }

  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "tab1"}
          title={`TAB 1`}
          iconName="user"
          onPress={() => this.setState({selectedTab: "tab1"})}>
          <AppNavigator
            initialRoute={{ident: "PeopleIndex"}} />
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "tab2"}
          title={`TAB 2`}
          iconName="user"
          onPress={() => this.setState({selectedTab: "tab2"})}>
          <AppNavigator
            initialRoute={{ident: "PersonShow",
                           person: {firstName: "jordan", lastName: "leigh", roomNumber: 30}}} />
        </Icon.TabBarItemIOS>

      </TabBarIOS>
    )
  }

}

const styles = React.StyleSheet.create({

})

AppRegistry.registerComponent('abcrn', () => abcrn)
