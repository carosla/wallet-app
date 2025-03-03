import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import {Bell, ChartBar, CreditCard, Gear, GearSix} from 'phosphor-react-native'

import theme from '../styles/theme'
import { Carteira } from '../screens/Tab/Carteira'
import { Notificacao } from '../screens/Tab/Notificacao'
import { Relatorio } from '../screens/Tab/Relatorio'
import { Settings } from '../screens/Tab/Settings'
import { limited_transaction } from '@src/utils/limited_transactions'
import { Transaction } from '@src/screens/App/Transactions'

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
          height: 55
        },
        tabBarLabelStyle: {
          fontSize: 11,
          color: theme.COLORS.GRAY3,
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
              marginTop: 5,
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
          ),
        }}
      />
      <Screen 
        name='Notificacao' 
        component={Notificacao}
        options={{
          tabBarLabel: 'Notificação',
          tabBarIcon: ({ focused }) => (
            <View
            style={{
              marginTop: 5,
              alignItems: 'center',
              justifyContent: 'center',
          }}
            >
              {focused ? (
              <Bell 
                size={25} 
                weight='light'
                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
              />
              ) : (
                <Bell 
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
        name='Relatorio' 
        component={Relatorio}
        options={{
          tabBarLabel: 'Relatorio',
          tabBarIcon: ({ focused }) => (
            <View
            style={{
              marginTop: 5,
              alignItems: 'center',
              justifyContent: 'center',
          }}
            >
              {focused ? (
              <ChartBar 
                size={25} 
                weight='light'
                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
              />
              ) : (
                <ChartBar 
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
        name='Settings' 
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused }) => (
            <View
            style={{
              marginTop: 5,
              alignItems: 'center',
              justifyContent: 'center',
          }}
            >
              {focused ? (
              <GearSix 
                size={25} 
                weight='light'
                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
              />
              ) : (
                <GearSix
                size={25} 
                weight='fill'
                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
              />
              )}
              </View>
          )
        }}
      />

    </Navigator>
  )
}