import React from 'react'
import { Platform, SafeAreaView } from 'react-native'

const ContentsView = ({ children }) => (
  <SafeAreaView style={{
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: (Platform.OS === 'android') ? 20 : 0 
  }}>
    {children}
  </SafeAreaView>
)

export default ContentsView
