/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import SettingsScreen from '../src/Settings/index';
import HomeScreen from '../src/Home/index';

import {ICONS} from '../src/assets/Imports';

const Stack = createStackNavigator();
export default function HomeStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Produtos',
          headerTitleStyle: {
            textAlign: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image source={ICONS.MENU_HOME} style={{margin: 10}} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export function SettingsStack({navigation, isHome}) {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings Stack',
          headerTitleStyle: {
            textAlign: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={ICONS.BACK} style={{margin: 10}} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
