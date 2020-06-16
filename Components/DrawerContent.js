/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {ICONS} from '../src/assets/Imports';

import TabNavigator from './TabsNavigator';

export function CustomDrawerContent(props) {
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.drawer}>
          <Image source={ICONS.HOME} style={{margin: 10}} />

          <Text>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Settings')}
          style={styles.drawer}>
          <Image source={ICONS.SETTINGS} style={{margin: 10}} />

          <Text>Opções</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View>
        <TouchableOpacity style={styles.drawerOut}>
          <Image source={ICONS.EXIT} style={{margin: 10}} />
          <Text>SAIR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const Drawer = createDrawerNavigator();

export function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  drawerOut: {
    // paddingTop: 600,
    // position: 'absolute',
    // borderBottomColor: '#d2d2d2',
    // borderTopColor: '#d2d2d2',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
  },
});
