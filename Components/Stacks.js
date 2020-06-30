/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import SettingsScreen from '../src/Settings/index';
import HomeScreen from '../src/Home/index';
import UserScreen from '../src/User/index';
import CategoryScreen from '../src/Category/index';
import WalletScreen from '../src/Wallet/index';

import {ICONS} from '../src/assets/Imports';
import LoginScreen from '../src/Login/index';
import RegisterScreen from '../src/Register/index';
import Pizzas from '../src/Pizzas/index';

const Stack = createStackNavigator();
export default function HomeStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Produtos',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 10,
            shadowOpacity: 0.9,
          },
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

export function SettingsStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Opções">
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Opções Stack',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 20,
            shadowOpacity: 1.0,
          },
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

export function UserStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen
        name="Usuário"
        component={UserScreen}
        options={{
          title: 'Usuário Stack',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 10,
            shadowOpacity: 0.9,
          },
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

export function CategoryStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="Categoria"
        component={CategoryScreen}
        options={{
          title: 'Categorias Stack',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 10,
            shadowOpacity: 0.9,
          },
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

export function WalletStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Wallet">
      <Stack.Screen
        name="Pagamento"
        component={WalletScreen}
        options={{
          title: 'Pagamento Stack',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 10,
            shadowOpacity: 0.9,
          },
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

export function LogintStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export function PizzasStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Pizzas">
      <Stack.Screen
        name="Pizzas"
        component={Pizzas}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pagamento"
        component={WalletScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
