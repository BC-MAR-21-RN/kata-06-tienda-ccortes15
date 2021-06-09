import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {Background} from '../components';
import {styleOrderComplete} from '../library/styles';

const OrderComplete = () => {
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent />
      <View style={styleOrderComplete.viewDown}>
        <Text style={styleOrderComplete.text}>Order placed.</Text>
        <Text style={styleOrderComplete.text}>Your order number is</Text>
        <Text style={styleOrderComplete.number}>#3243</Text>
      </View>
      <View style={styleOrderComplete.imageContainer}>
        <Image
          source={require('../../img/store.png')}
          style={styleOrderComplete.image}
        />
      </View>
    </Background>
  );
};

export default OrderComplete;
