import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {ICONS} from '../assets/Imports';
import * as Animatable from 'react-native-animatable';
const ProductSelected = (data) => {
  const [current, setCurrent] = useState(null);
  const [items, setItems] = useState(data.data);
  const handleItem = (item, index) => {
    //tratamento de envio ao selecionar o item requerido
  };
  const ItemsUpdate = () => {
    return (
      <>
        {items
          ? items.map((item, index) => {
              const {name, view, description} = item;
              return (
                <Animatable.View animation="bounceInRight" duration={3500}>
                  <TouchableOpacity
                    onPress={() => handleItem(item, index)}
                    style={styles.product}>
                    <Image source={view ? ICONS.UNCHECKED : ICONS.CHECKED} />
                    <View>
                      <Text style={styles.title}>{name}</Text>
                      <Text style={styles.description}>{description}</Text>
                    </View>
                  </TouchableOpacity>
                </Animatable.View>
              );
            })
          : null}
      </>
    );
  };
  return <ItemsUpdate />;
};
export default ProductSelected;
const styles = StyleSheet.create({
  product: {
    marginBottom: 10,
    flexDirection: 'row',
    paddingLeft: 10,
    borderBottomWidth: 0.3,
    borderColor: 'gray',
    paddingBottom: 10,
    marginHorizontal: 10,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  description: {fontSize: 14, color: 'gray', marginLeft: 10},
});
