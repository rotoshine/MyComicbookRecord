import React, { Component } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class AppConfigScreen extends Component {
  static navigationOptions = {
    title: 'App Config'
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>AppConfig</Text>
      </SafeAreaView >
    )
  }
}