import React from 'react';
import {Image, Text, View} from 'react-native';
import CardView from 'react-native-cardview';
import {AddRemoveItem, Icon, TextQuantity} from '.';
import {styleIcon, styleItemList, styleTextQuantity} from '../library/styles';

const ItemList = ({image, nameProduct, quant, measure, price}) => {
  return (
    <CardView cardElevation={5} cardMaxElevation={5} cornerRadius={0}>
      <View style={styleItemList.container}>
        <View>
          <Image source={image} style={styleItemList.image} />
        </View>
        <View style={styleItemList.flex}>
          <View style={styleItemList.viewTop}>
            <Text style={styleItemList.nameProduct}>{nameProduct}</Text>
            <Icon
              icon={require('../assets/icons/trash.png')}
              style={{...styleIcon.iconMid, ...styleItemList.icon}}
            />
          </View>
          <View style={styleItemList.viewMid}>
            <Text style={styleItemList.text}>
              {quant} {measure}
            </Text>
            <Text style={styleItemList.text}>${price}</Text>
          </View>
          <View style={styleItemList.viewDown}>
            <AddRemoveItem remove />
            <TextQuantity
              quant={quant}
              measure={measure}
              style={styleTextQuantity}
            />
            <AddRemoveItem />
          </View>
        </View>
      </View>
    </CardView>
  );
};

export default ItemList;
