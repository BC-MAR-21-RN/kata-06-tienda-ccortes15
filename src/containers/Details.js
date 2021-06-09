import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {
  AddRemoveItem,
  HeaderComponent,
  ImageContainer,
  PrimaryButton,
} from '../components';
import {styleDetails, styleLayout, stylePrimaryButton} from '../library/styles';

const Details = ({navigation}) => {
  const product = {
    image: require('../../img/cover.jpg'),
    name: 'Cabbage',
    price: 15,
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.",
    measure: 'Kg',
  };

  return (
    <View style={styleLayout.container}>
      <HeaderComponent title="Details" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styleDetails.container}>
          <View style={styleLayout.itemContainer}>
            <ImageContainer image={product.image} />
            <Text style={styleDetails.name}>{product.name}</Text>
            <Text style={styleDetails.price}>${product.price}</Text>
            <Text style={styleDetails.text}>{product.detail}</Text>
            <View style={styleLayout.itemContainer}>
              <AddRemoveItem quant={1} measure={product.measure} />
            </View>
          </View>
          <PrimaryButton
            text="Add to cart"
            onPress={() => console.log('pressed!')}
            styleButton={stylePrimaryButton.button}
            styleText={stylePrimaryButton.text}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
