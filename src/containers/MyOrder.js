import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Background, ItemList, PrimaryButton} from '../components';
import {styleMyOrder, stylePrimaryButton} from '../library/styles';
import HeaderComponent from '../components/HeaderComponent';

const MyOrder = ({navigation}) => {
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
    ],
  };

  return (
    <Background>
      <HeaderComponent title="My Order" navigation={navigation} />
      <View style={styleMyOrder.container}>
        <View style={styleMyOrder.viewTop}>
          <Text style={styleMyOrder.text}>Sub Total =</Text>
          <Text style={styleMyOrder.price}>132$</Text>
        </View>
        <PrimaryButton
          text="Check Out Now"
          styleButton={stylePrimaryButton.buttonCheck}
          styleText={stylePrimaryButton.textCheck}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styleMyOrder.viewDown}>
          {data.productList.map(item => (
            <View key={item.id} style={styleMyOrder.item}>
              <ItemList image={item.image} product={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </Background>
  );
};

export default MyOrder;
