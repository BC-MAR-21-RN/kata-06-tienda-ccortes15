import React from 'react';
import { View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Background, HeaderComponent, ProductItem } from '../components';
import { styleHome } from '../library/styles';

const Home = ({navigation}) => {
  const data = {
    order: 2341,
    productList: [
      {
        id: 1,
        image: require('../../img/cover.jpg'),
        name: 'brocoli',
        quant: 2,
        measure: 'Kg',
        price: 3.14,
      },
      {
        id: 2,
        image: require('../../img/cover.jpg'),
        name: 'apple',
        quant: 2,
        measure: 'p',
        price: 4.0,
      },
      {
        id: 3,
        image: require('../../img/cover.jpg'),
        name: 'kale',
        quant: 300,
        measure: 'g',
        price: 2.5,
      },
      {
        id: 4,
        image: require('../../img/cover.jpg'),
        name: 'apple',
        quant: 2,
        measure: 'p',
        price: 4.0,
      },
      {
        id: 5,
        image: require('../../img/cover.jpg'),
        name: 'kale',
        quant: 300,
        measure: 'g',
        price: 2.5,
      },
      {
        id: 6,
        image: require('../../img/cover.jpg'),
        name: 'kale',
        quant: 300,
        measure: 'g',
        price: 2.5,
      },
      {
        id: 7,
        image: require('../../img/cover.jpg'),
        name: 'apple',
        quant: 2,
        measure: 'p',
        price: 4.0,
      },
      {
        id: 8,
        image: require('../../img/cover.jpg'),
        name: 'kale',
        quant: 300,
        measure: 'g',
        price: 2.5,
      },
    ],
  };

  return (
    <Background>
      <HeaderComponent title="Home" navigation={navigation} />
      <View style={styleHome.container}>
        <ScrollView
          contentContainerStyle={styleHome.scrollContainer}
          showsVerticalScrollIndicator={false}>
          {data.productList.map(item => (
            <ProductItem key={item.id} product={item} goToDetails={() => navigation.jumpTo('Details')} />
          ))}
        </ScrollView>
      </View>
    </Background>
  );
};

export default Home;
