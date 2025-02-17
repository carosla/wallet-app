import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import {CreditCard} from 'phosphor-react-native'

import theme from '../styles/theme'
import { Carteira } from '../screens/Tab/Carteira'
import { Notificacao } from '../screens/Tab/Notificacao'
import { Relatorio } from '../screens/Tab/Relatorio'
import { Settings } from '../screens/Tab/Settings'

const {Navigator, Screen} = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Navigator
      initialRouteName='Carteira'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: theme.COLORS.GRAY4,
        tabBarActiveTintColor: theme.COLORS.GRAY1,
        tabBarStyle: {
          backgroundColor: theme.COLORS.GRAY6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          color: theme.COLORS.GRAY3
        }
      }}
    >
      <Screen 
        name='Carteira' 
        component={Carteira}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
          }}
            >
              {focused ? (
              <CreditCard 
                size={25} 
                weight='light'
                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
              />
              ) : (
                <CreditCard 
                size={25} 
                weight='fill'
                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
              />
              )}
            </View>
          )
        }}
      />
      <Screen 
        name='Notificacao' 
        component={Notificacao}
      />
      <Screen 
        name='Relatorio' 
        component={Relatorio}
      />
      <Screen 
        name='Settings' 
        component={Settings}
      />
    </Navigator>
  )
}