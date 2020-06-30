/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../Components/Loader';
import {ICONS} from '../assets/Imports';
import {useFocusEffect} from '@react-navigation/native';

const WalletScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      getDataStorage();
    }, []),
  );
  useEffect(() => {
    let total = data.reduce((total, valor) => total + valor.price, 0);
    setTotal(total);
    let full = '$' + total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    setPrice(full);
  }, [data]);
  const getDataStorage = async () => {
    setLoading(true);

    await AsyncStorage.getItem('cart')
      .then((cart) => {
        if (cart !== null) {
          const cartFood = JSON.parse(cart);
          setData(cartFood);
          setLoading(false);
        } else {
          console.log('vazio');
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);

        Alert.alert('Erro!', error);
      });
  };
  const removeItem = async (item) => {
    const {name} = item.item.data;

    const cart = data;
    cart.splice(cart.indexOf(item), 1);
    setData(cart);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
    Alert.alert('Sucesso!', `${name} foi removido do seu carrinho!`);
    getDataStorage();
  };

  const SendOrder = () => {
    Alert.alert('Pedido', 'Dante, desejar enviar seu pedido?', [
      {
        text: 'Não',
        onPress: () => console.log('cancel'),
        style: 'cancel',
      },
      {text: 'Sim', onPress: () => alert('Pedido Enviado!')},
    ]);
  };

  const HandlePayment = () => {
    return (
      <View>
        {data
          ? data.map((item, index) => {
              const {quantify} = item;
              const {name, description} = item.item.data;
              return (
                <>
                  <View style={styles.container} key={index}>
                    <TouchableOpacity
                      onPress={() =>
                        Alert.alert('Excluir', `deseja excluir ${name}?`, [
                          {
                            text: 'Não',
                            onPress: () => console.log('cancel'),
                            style: 'cancel',
                          },
                          {text: 'Sim', onPress: () => removeItem(item)},
                        ])
                      }
                      style={styles.removeItem}>
                      <Image
                        source={ICONS.UNCHECKED}
                        style={{width: 15, height: 15}}
                      />
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.title}>{name}</Text>
                      <Text style={styles.description}>{description}</Text>
                      <Text style={styles.quantify}>Qnt: {quantify}</Text>
                    </View>
                  </View>
                </>
              );
            })
          : null}
      </View>
    );
  };

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <Loader loading={loading} />
        <HandlePayment />
      </ScrollView>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.bottomToucha}
          onPress={() => SendOrder()}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>{price}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WalletScreen;
const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.9)',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  removeItem: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    zIndex: 1,
    borderRadius: 15,
    width: 30,
    height: 30,
    flex: 1,
    top: 2,
  },
  title: {
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
    fontSize: 10,
  },
  quantify: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    color: 'gray',
    fontSize: 10,
  },
  bottom: {
    bottom: 0,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    padding: 20,
    flex: 1,
    position: 'absolute',
  },
  bottomToucha: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343434',
    width: 150,
    borderRadius: 50,
  },
  totalPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
});
