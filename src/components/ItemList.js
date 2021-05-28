import React from 'react';
import {Image, Text, View} from 'react-native';
import CardView from 'react-native-cardview';
import {AddRemoveItem, Icon} from '.';
import { trash } from '../library/constants/icons';
import {styleIcon, styleItemList} from '../library/styles';

const ItemList = ({image, product}) => {
  return (
    <CardView cardElevation={5} cardMaxElevation={5} cornerRadius={0}>
      <View style={styleItemList.container}>
        <View>
          <Image source={image} style={styleItemList.image} />
        </View>
        <View style={styleItemList.flex}>
          <View style={styleItemList.viewTop}>
            <Text style={styleItemList.nameProduct}>{product.name}</Text>
            <Icon
              icon={trash}
              style={{...styleIcon.iconMid, ...styleItemList.icon}}
            />
          </View>
          <View style={styleItemList.viewMid}>
            <Text style={styleItemList.text}>
              {product.quant} {product.measure}
            </Text>
            <Text style={styleItemList.text}>${product.price}</Text>
          </View>
          <View style={styleItemList.viewDown}>
            <AddRemoveItem />
          </View>
        </View>
      </View>
    </CardView>
  );
};

export default ItemList;
