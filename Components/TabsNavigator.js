/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image} from 'react-native';

import HomeStack, {
  SettingsStack,
  UserStack,
  CategoryStack,
  WalletStack,
} from './Stacks';

import {ICONS} from '../src/assets/Imports';
const Tab = createBottomTabNavigator();

export default function TabNavigator({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? ICONS.HOME : ICONS.HOME_OUTLINE;
          } else if (route.name === 'Opções') {
            iconName = focused ? ICONS.SETTINGS : ICONS.SETTINGS_OUTLINE;
          } else if (route.name === 'Usuário') {
            iconName = focused ? ICONS.USER : ICONS.USER_OUTLINE;
          } else if (route.name === 'Categorias') {
            iconName = focused ? ICONS.CATEGORY : ICONS.CATEGORY_OUTLINE;
          } else if (route.name === 'Pagamento') {
            iconName = focused ? ICONS.WALLET : ICONS.WALLET_OUTLINE;
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{width: 20, height: 20}}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Opções" component={SettingsStack} />
      <Tab.Screen name="Usuário" component={UserStack} />
      <Tab.Screen name="Categorias" component={CategoryStack} />
      <Tab.Screen name="Pagamento" component={WalletStack} />
    </Tab.Navigator>
  );
}
