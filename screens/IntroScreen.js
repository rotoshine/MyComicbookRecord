import React, { Component } from 'react';
import styled from 'styled-components/native'
import { View, Text, Image, ImageBackground } from 'react-native'
import { Spinner, H4 } from 'native-base'
import { SafeAreaView } from 'react-navigation';
import Expo from 'expo';

import { loadUser } from '../utils/user';
import UserContext from '../context/UserContext'

const IntroImage = styled.ImageBackground`
  resize-mode: ${Image.resizeMode.cover};  
  width: 100%;
  height: 100%;  
  justify-content: center;
  align-items: center;
`

export default class IntroScreen extends Component {
  state = {
    isReady: false,
    user: null
  }

  async componentDidMount() {
    await this.loadFonts()

    const { navigation } = this.props
    const { navigate } = navigation
    try {
      const user = await loadUser()

      if (user) {
        this.setState({ user }, () => {
          console.log('logined user:' + JSON.stringify(this.state.user))
          navigate('App')
        })

      } else {
        navigate('Auth')
      }
    } catch (e) {
      // go login
      navigate('Auth')
    }
  }

  async loadFonts() {
    // font loading
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf')
    });
    this.setState({ isReady: true });
  }
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <ImageBackground 
            style={{            
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }} 
            source={require('../assets/intro.jpg')}
            resizeMode="cover">   
            <View>         
              <Text>이세계에서 넘어온</Text>
              <Text>보존주의자의</Text>
              <Text>지구 독서 생활 비망록</Text>
              {
                !this.state.isReady && <Spinner />
              }            
            </View>
          </ImageBackground>
        </SafeAreaView >
      </UserContext.Provider>
    )
  }
}