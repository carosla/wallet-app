import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Profile } from '../screens/App/Profile';
import { TabRoutes } from './tab.routes'
import { Transaction } from '../screens/App/Transactions'
import { AddCartao } from '../screens/App/AddCartao'
import { DetailsCard } from '../screens/App/DetailsCard'
import { Transacao } from '../screens/App/Transacao';
import { Carteira } from '../screens/Tab/Carteira';
import { limited_transaction } from '@src/utils/limited_transactions';

const {Navigator, Screen} = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName='TabRoutes'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='TabRoutes' component={TabRoutes}/>
      <Screen name='Profile' component={Profile} />
      <Screen name='Transaction' component={Transaction} />
      <Screen name='AddCartao' component={AddCartao} />
      <Screen name='DetailsCard' component={DetailsCard} />
      <Screen name='Transacao' component={Transacao} />
      <Screen name='Carteira' component={Carteira} />
    </Navigator>
  )
}