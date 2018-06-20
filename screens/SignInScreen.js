import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class SignInScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login!</Text>
        <Button onPress={() => this.props.navigation.navigate('App')} title="Go Main" />
      </SafeAreaView >
    )
  }
}
