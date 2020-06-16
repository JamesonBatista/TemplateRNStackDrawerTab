/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './Components/DrawerContent';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
