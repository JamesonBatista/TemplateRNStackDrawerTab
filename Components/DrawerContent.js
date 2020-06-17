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
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import {createDrawerNavigator} from '@react-navigation/drawer';
import {ICONS} from '../src/assets/Imports';

import TabNavigator from './TabsNavigator';
import {DRAWER} from '../src/assets/Imports/index';

export function CustomDrawerContent(props) {
  return (
    <ScrollView>
      <View style={{marginBottom: 100}} />
      <SafeAreaView style={{flex: 1}}>
        {DRAWER.map((item) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => props.navigation.navigate(item.name)}
                style={styles.drawer}
                key={item.name}>
                <Image source={item.icon} style={{margin: 10}} />
                <Text style={styles.text}>{item.text}</Text>
              </TouchableOpacity>
              <View style={styles.line} />
            </>
          );
        })}
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
  },
  drawerOut: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: Platform.OS === 'ios' ? 20 : 10,
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 10,
  },
  text: {},
});
