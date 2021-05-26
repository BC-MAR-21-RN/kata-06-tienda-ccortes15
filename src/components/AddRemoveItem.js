import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Icon} from '.';
import {styleAddRemove, styleIcon} from '../library/styles';

const AddRemoveItem = () => {
  return (
    <View style={styleAddRemove.container}>
      <TouchableHighlight
        style={styleAddRemove.iconContainer}
        activeOpacity={0.6}
        underlayColor="#DDDDDD">
        <Icon
          icon={require('../assets/icons/minus.png')}
          style={styleIcon.iconMid}
        />
      </TouchableHighlight>
      <View style={styleAddRemove.view}>
        <Text style={styleAddRemove.textValue}>1</Text>
        <Text style={styleAddRemove.text}>Kg</Text>
      </View>
      <TouchableHighlight
        style={styleAddRemove.iconContainer}
        activeOpacity={0.6}
        underlayColor="#DDDDDD">
        <Icon
          icon={require('../assets/icons/plus.png')}
          style={styleIcon.iconMid}
        />
      </TouchableHighlight>
    </View>
  );
};

export default AddRemoveItem;
