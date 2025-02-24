import { View, Text } from 'react-native'
import React from 'react'

import { 
        ContentHeader, 
        Avatar, 
        AppNome,
        Status,
        Container } from './styles'

export const Header = () => {
  return (
    <Container>
      <ContentHeader>
        <AppNome>Wallet</AppNome>
        <Status>Ativo</Status>
      </ContentHeader>
      <Avatar
        source={{uri: 'https://github.com/carosla.png'}}
      ></Avatar>
    </Container>
  )
}