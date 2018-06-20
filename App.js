import * as firebase from 'firebase'

import React from 'react';
import { Platform } from 'react-native'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID } from 'react-native-dotenv'
import IntroScreen from './screens/IntroScreen'
import SignInScreen from './screens/SignInScreen'
import MyComicBooksRecordScreen from './screens/MyComicBooksRecordScreen'
import AppConfigScreen from './screens/AppConfigScreen'

// Initialize Firebase
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID  
};

firebase.initializeApp(firebaseConfig);

const tabInfo = {
  Timeline: {
    icon: 'ios-paper-outline',
    label: 'Timeline'
  },
  MyComicBooksRecord: {
    icon: 'ios-bookmarks-outline',
    label: '기록하기'
  },
  AppConfig: {
    icon: 'ios-cog-outline',
    label: '설정'
  }
  
}

const getIcon = (navigation) => {
  const { focused, tintColor } = navigation
  const { routeName } = navigation.state
  const iconName = tabInfo[routeName] ? tabInfo[routeName].icon : ''

  return (
    <Ionicons name={iconName} size={25} color={tintColor} />
  )
}

const getLabel = (navigation) => {
  const { routeName } = navigation.state

  return tabInfo[routeName] ? tabInfo[routeName].label : ''
}

const MyComicBooksRecordStack = createStackNavigator({
  List: MyComicBooksRecordScreen
}, {
  navigationOptions: {
    title: '기록하기'
  }
})

const AppNavigator = createBottomTabNavigator({  
  MyComicBooksRecord: MyComicBooksRecordStack,
  AppConfig: AppConfigScreen,
}, {
  swipeEnabled: true,
  animationEnabled: true,
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: getIcon(navigation),
    tabBarLabel: getLabel(navigation)
  })
})

export default createSwitchNavigator(
  {
    Intro: IntroScreen,
    Auth: SignInScreen,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Intro',
  }
)
