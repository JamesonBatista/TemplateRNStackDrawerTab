/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import Pizzas from '../Pizzas/index';
import Promotions from '../Promotions/index';
import PizzaDupla from '../PizzaDupla/index';

function HomeScreen({navigation}) {
  const [segment, setSegment] = useState({selected: 0});

  const handleIndexChange = (index) => {
    setSegment({selected: index});
  };
  const HandleTabs = () => {
    switch (segment.selected) {
      case 0:
        return <Pizzas />;
      case 1:
        return <PizzaDupla />;
      case 2:
        return <Promotions />;
      default:
        return null;
    }
  };

  return (
    <Animatable.View
      style={styles.container}
      animation="fadeInRightBig"
      duration={1500}>
      <ScrollView
        style={{width: '100%', padding: 5, flexGrow: 0.02}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={{flexGrow: 1}}>
          <SegmentedControlTab
            borderRadius={5}
            tabsContainerStyle={styles.tabsContainerStyle}
            tabStyle={styles.tabStyle}
            tabTextStyle={styles.tabTextStyle}
            activeTabStyle={styles.activeTabStyle}
            values={['Pizzas', '2 Sabores', 'Promoções', 'Massas', 'Entradas']}
            selectedIndex={segment.selected}
            onTabPress={handleIndexChange}
          />
        </View>
      </ScrollView>
      <ScrollView
        style={{flex: 1, width: '98%'}}
        showsVerticalScrollIndicator={false}>
        <HandleTabs />
      </ScrollView>
    </Animatable.View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },

  tabsContainerStyle: {
    height: 30,
    width: 400,
  },
  tabStyle: {backgroundColor: 'transparent', borderWidth: 0},

  tabTextStyle: {
    fontWeight: 'bold',
    color: '#ccc',
  },
  activeTabStyle: {
    backgroundColor: '#343434',
    borderBottomWidth: 4,
    borderColor: 'orange',
  },
});

export default HomeScreen;
