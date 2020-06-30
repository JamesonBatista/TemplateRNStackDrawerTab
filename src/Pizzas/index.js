/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import {ICONS} from '../assets/Imports';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import Loader from '../../Components/Loader';
import {GetData} from '../API/index';
const db = firestore();

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    GetPizzas();
  }, []);
  const GetPizzas = async () => {
    await db.collection('pizzas').onSnapshot((response) => {
      const data = response.docs.map((res) => ({
        id: res.id,
        ...res.data(),
      }));
      setPizzas(data);
      setLoading(false);
    });
  };

  if (loading) {
    return <Loader loading={loading} />;
  }

  const handleCount = () => {
    if (count > 0) {
      return setCount(count - 1);
    }
  };
  const handleItem = (item, index) => {
    setCount(0);

    if (current === index) {
      return setCurrent(null);
    } else {
      setCurrent(index);
    }
  };

  const handlePayment = async (item) => {
    if (count > 0) {
      let data = {
        item: item,
        price: item.data?.price * count,
        quantify: count,
      };
      // console.log('pass: ', data);

      AsyncStorage.getItem('cart')
        .then((datacart) => {
          if (datacart !== null) {
            const cart = JSON.parse(datacart);
            cart.push(data);

            AsyncStorage.setItem('cart', JSON.stringify(cart));
          } else {
            const cart = [];
            cart.push(data);
            AsyncStorage.setItem('cart', JSON.stringify(cart));
          }
          Alert.alert('Sucesso!', `${item.data.name} adicionado ao carrinho.`);
          setCurrent(null);
        })
        .catch((error) => {
          Alert.alert(error);
        });
    } else {
      Alert.alert('Adicione uma quantidade.', 'Sua escolha está vazia!');
    }
  };
  const handleDesable = () => {
    setCount(count + 1);
  };

  const ViewCardPrice = (item) => {
    return (
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: 10,
          }}
          viewCount>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{paddingRight: 20}}
              onPress={() => handleDesable()}>
              <Image source={ICONS.ADD} />
            </TouchableOpacity>
            <Text style={styles.numberItens}>{count}</Text>
            <TouchableOpacity
              style={{paddingLeft: 20}}
              onPress={() => handleCount(item)}>
              <Image source={ICONS.REMOVE} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <View style={{marginRight: 10}}>
              <Button title="cancelar" onPress={() => handleItem()} />
            </View>
            <Button
              title="adicionar"
              onPress={() => {
                handlePayment(item);
              }}
              disabled={count <= 0}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
          }}>
          <Text style={styles.total}>Total: {item.data?.price * count}</Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {pizzas.map((item, index) => {
        return (
          <View key={index} style={styles.cardPizza}>
            <TouchableOpacity
              key={index}
              style={{flexDirection: 'row'}}
              onPress={() => handleItem(item, index)}>
              <View>
                <Image
                  source={{uri: item.image}}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.viewProduct}>
                <Text style={styles.tile}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>R$ {item.price}</Text>
              </View>
            </TouchableOpacity>
            {current === index ? (
              <ScrollView>
                <ViewCardPrice data={item} />
              </ScrollView>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default Pizzas;
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  cardPizza: {
    width: '95%',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.9)',
  },
  viewProduct: {padding: 10, flex: 1},

  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  tile: {
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'italic',
  },
  description: {
    color: 'gray',
  },
  price: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    marginTop: 10,
  },
  numberItens: {
    fontSize: 30,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
});
