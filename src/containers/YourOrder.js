import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import {Background, CollapseItem, IconButton} from '../components';
import {arrowLeft} from '../library/constants/icons';
import {styleIcon, styleYourOrder} from '../library/styles';

const YourOrder = ({navigation}) => {
  const data = [
    {
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
    },
    {
      order: 5646,
      productList: [
        {
          id: 11,
          image: require('../../img/cover.jpg'),
          name: 'brocoli',
          quant: 2,
          measure: 'Kg',
          price: 3.14,
        },
        {
          id: 21,
          image: require('../../img/cover.jpg'),
          name: 'apple',
          quant: 2,
          measure: 'p',
          price: 4.0,
        },
        {
          id: 31,
          image: require('../../img/cover.jpg'),
          name: 'kale',
          quant: 300,
          measure: 'g',
          price: 2.5,
        },
        {
          id: 41,
          image: require('../../img/cover.jpg'),
          name: 'apple',
          quant: 2,
          measure: 'p',
          price: 4.0,
        },
        {
          id: 51,
          image: require('../../img/cover.jpg'),
          name: 'kale',
          quant: 300,
          measure: 'g',
          price: 2.5,
        },
      ],
    },
  ];

  return (
    <Background>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent
      />
      <View style={styleYourOrder.header}>
        <IconButton
          icon={arrowLeft}
          onPress={() => navigation.goBack()}
          styleIcon={styleIcon.iconMid}
        />
        <View style={styleYourOrder.viewTitle}>
          <Text style={styleYourOrder.title}>Your Orders</Text>
        </View>
      </View>
      <ScrollView style={styleYourOrder.viewDown}>
        {data.map(item => (
          <View key={item.order} style={styleYourOrder.collapse}>
            <CollapseItem data={item} />
          </View>
        ))}
      </ScrollView>
    </Background>
  );
};

export default YourOrder;
