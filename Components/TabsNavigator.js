/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image} from 'react-native';

import HomeStack, {SettingsStack} from './Stacks';
import {ICONS} from '../src/assets/Imports';
const Tab = createBottomTabNavigator();

export default function TabNavigator({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? ICONS.HOME : ICONS.HOME_OUTLINE;
          } else if (route.name === 'Settings') {
            iconName = focused ? ICONS.SETTINGS : ICONS.SETTINGS_OUTLINE;
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
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}
