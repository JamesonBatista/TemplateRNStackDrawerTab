/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {DATA} from '../assets/Imports/index';
import {ICONS} from '../assets/Imports';
import * as Animatable from 'react-native-animatable';

function HomeScreen({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DATA);
  }, []);

  return (
    <Animatable.View
      style={styles.container}
      animation="fadeInRightBig"
      duration={1500}
    />
  );
}
const styles = StyleSheet.create({
  logoView: {
    borderWidth: 1,
    borderColor: '#d2d2d2',
    margin: 10,
    borderRadius: 30,
    elevation: 24,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
  },
  logo: {
    width: 300,
    height: 100,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  title: {fontSize: 30, fontWeight: 'bold', margin: 10, color: '#fff'},
  cardView: {
    alignItems: 'center',
  },
  scroll: {
    height: 130,
  },
  Card: {
    margin: 5,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    // backgroundColor: '#fff',
  },
  image: {width: 100, height: 100, borderRadius: 10},
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});

export default HomeScreen;
