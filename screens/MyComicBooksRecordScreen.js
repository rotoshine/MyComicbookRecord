import React, { Component } from 'react'
import styled from 'styled-components/native'
import { Avatar, List, ListItem } from 'react-native-elements'

import ContentsView from '../components/ContentsView'

import { loadUser } from '../utils/user'
import UserContext from '../context/UserContext'

const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`

const UserName = styled.Text`
  margin-left: 10px;
  font-size: 20px;
`

const ComicBooksInfo = styled.View`

`

export default class MyComicBooksRecord extends Component {
  static navigationOptions = {
    title: '만화책 기록하기'
  }

  state = {
    user: {}
  }

  async componentDidMount () {
    const user = await loadUser()

    this.setState({
      user
    })
  }
  
  render() {
    const { user = {}} = this.state

    return (
      <ContentsView>
        <UserInfo>
          <Avatar large rounded title={user.name} source={{ uri: user.photoUrl }} />
          <UserName>{user.name}</UserName>
        </UserInfo>
        <List containerStyle={{ marginBottom: 20 }}>
        </List>
      </ContentsView>      
    )
  }
}