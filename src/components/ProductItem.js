import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import CardView from 'react-native-cardview';
import {Badge, PrimaryButton} from '.';
import {stylePrimaryButton, styleProductItem} from '../library/styles';

const ProductItem = ({product}) => {
  return (
    <CardView
      cardElevation={4}
      cardMaxElevation={4}
      cornerRadius={5}
      style={styleProductItem.card}>
      <View style={styleProductItem.item}>
        <View>
          <ImageBackground
            source={product.image}
            style={styleProductItem.coverImage}
          />
          <Badge quant={product.quant} measure={product.measure} />
        </View>
        <View style={styleProductItem.viewDetails}>
          <Text style={styleProductItem.productName}>{product.name}</Text>
          <Text style={styleProductItem.productPrice}>${product.price}</Text>
        </View>
        <View style={styleProductItem.viewDown}>
          <PrimaryButton
            text="Add to cart"
            styleButton={stylePrimaryButton.buttonAddTo}
            styleText={stylePrimaryButton.textAddTo}
          />
        </View>
      </View>
    </CardView>
  );
};

export default ProductItem;
