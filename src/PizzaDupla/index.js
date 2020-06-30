import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {TWOPIZZAS} from '../assets/Imports/index';

import ProdutcPizzaTwo from './product';

const PizzaDupla = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    list.map((item) => {
      console.log(item);

      item.GRANDE.map((response) => {
        console.log(response);
      });
    });
  }, []);

  return (
    <View>
      {list
        ? list.map((item, index) => {
            return (
              <View key={index}>
                <Text>{item.name}</Text>
              </View>
            );
          })
        : null}
    </View>
  );
};

export default PizzaDupla;
