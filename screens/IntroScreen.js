import React, { Component } from 'react'
import { SafeAreaView  } from 'react-navigation'
import { Text } from 'react-native-elements'

export default class IntroScreen extends Component {
  componentDidMount() {
    const { navigation } = this.props
    setTimeout(() => {
      navigation.navigate('Auth')
    }, 1000 * 1)
  }

  render() {
    return (
      <SafeAreaView  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text h4>이세계에서 넘어온</Text>
        <Text h4>보존주의자의</Text>
        <Text h4>지구 독서 생활 비망록</Text>
      </SafeAreaView >
    )
  }
}