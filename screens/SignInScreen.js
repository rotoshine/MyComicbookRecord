import React, { Component } from 'react'
import { SafeAreaView, StackActions, NavigationActions } from 'react-navigation'
import { Button, Text, Icon, Toast } from 'native-base'
import { ImageBackground } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import { signInWithGoogleAsync, loadUser } from '../utils/user'

export default class SignInScreen extends Component {
  state = {
    nowLoginRequest: false
  }

  async componentWillMount() {
    const loginedUser = await loadUser();

    if (loginedUser !== null) {
      this.moveAppMain();
    }
  }

  async asyncSetState(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async login() {
    try {
      await this.asyncSetState({ nowLoginRequest: true });
      const result = await signInWithGoogleAsync();

      console.log(result)
      console.log(`result: ${result.type}`)
      if (result) {
        if (result.type === 'success') {
          return this.moveAppMain()
        } else if (result.cancelled) {
          Toast.show({
            text: '로그인을 취소하였습니다.',
            duration: 3000,
            position: 'bottom'
          });
        } else if (result.error) {
          Toast.show({
            text: `error: ${result.error.message}`,
            duration: 3000,
            position: 'bottom',
            type: 'danger'
          });
        }
      }

      await this.asyncSetState({ nowLoginRequest: false });
    } catch (e){
      console.error(e)
    }
  }

  moveAppMain() {
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
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          source={require('../assets/intro.jpg')}
          resizeMode="cover">
          <Spinner visible={this.state.nowLoginRequest} size="large" />          
          <Button iconLeft primary block onPress={() => signInWithGoogleAsync()}>
            <Icon name="logo-google" />
            <Text>Sign in Google</Text>
          </Button>
        </ImageBackground>
      </SafeAreaView >
    )
  }
}
