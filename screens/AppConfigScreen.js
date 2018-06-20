import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { Button, Text } from 'native-base'
import { SafeAreaView } from 'react-navigation'
import { signOut } from '../utils/user';

export default class AppConfigScreen extends Component {
  static navigationOptions = {
    title: 'App Config'
  }

  handleSignOut = async () => {
    await signOut()

    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        key: null,
        actions: [
          NavigationActions.navigate({ routeName: 'App' })
        ]
      })
    );    
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button block danger onPress={this.handleSignOut}>
          <Text>Logout</Text>
        </Button>
      </SafeAreaView >
    )
  }
}