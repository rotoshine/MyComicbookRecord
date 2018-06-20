import React, { Component } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class TimelineScreen extends Component {
  static navigationOptions = {
    title: 'Timeline'
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Timeline!!</Text>
      </SafeAreaView >
    )
  }
}