import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import Pizzas from '../Pizzas/index';

const db = firestore();

export const GetData = async (collection) => {
  await db.collection('pizzas').onSnapshot((response) => {
    const data = response.docs.map((res) => ({
      id: res.id,
      ...res.data(),
    }));
    console.log(data);

    return data;
  });
};
