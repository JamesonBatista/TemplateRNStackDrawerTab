/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './Components/DrawerContent';
import {LogintStack} from './Components/Stacks';

// console.disableYellowBox = true;
export default function App({user}) {
  return (
    <NavigationContainer>
      {!user ? <LogintStack /> : <DrawerNavigator />}
    </NavigationContainer>
  );
}
