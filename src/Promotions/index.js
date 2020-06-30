import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ProductSelected from './produtc';
import LottieView from 'lottie-react-native';
import animation from '../assets/arrowdown.json';
import firestore from '@react-native-firebase/firestore';
import Loader from '../../Components/Loader';
const db = firestore();
let MASSA = 'massas';
let PIZAS = 'product';
const Promotions = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProdut();
  }, []);
  const getProdut = async () => {
    await db.collection('products').onSnapshot((res) => {
      const get = res.docs.map((result) => ({
        id: result.id,
        ...result.data(),
      }));
      setProducts(get);
    });
  };

  const getProdutPromotion = async (collection) => {
    console.log('collections: ', collection);
    await db
      .collection('promotions')
      .doc('5T0ZX8hV7wrxQk980BJS')
      .collection(collection)
      .onSnapshot((res) => {
        const get = res.docs.map((result) => ({
          id: result.id,
          ...result.data(),
        }));
        setData(get);
      });
  };
  const HandleSelectProduct = (item, index) => {
    if (current === index) {
      return setCurrent(null);
    } else {
      setCurrent(index);
    }
    switch (item.name) {
      case 'MASSAS':
        return getProdutPromotion(MASSA);

      default:
        return getProdutPromotion(PIZAS);
    }
  };

  return (
    <View>
      {products.map((item, index) => {
        return (
          <>
            <TouchableOpacity
              style={styles.options}
              onPress={() => HandleSelectProduct(item, index)}>
              <Text style={styles.title}>{item.name}</Text>
              <LottieView
                source={require('../assets/arrowdown.json')}
                autoPlay
                loop
                style={{width: 30}}
              />
            </TouchableOpacity>
            {current === index ? <ProductSelected data={data} /> : null}
          </>
        );
      })}
    </View>
  );
};
export default Promotions;
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20,
  },
});
