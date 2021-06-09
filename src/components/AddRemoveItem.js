import React from 'react';
import {Text, View} from 'react-native';
import {IconButton} from '.';
import {styleAddRemove, styleIcon} from '../library/styles';
import {minus, plus} from '../library/constants/icons';

const AddRemoveItem = ({quant, measure}) => {
  return (
    <View style={styleAddRemove.container}>
      <IconButton
        icon={minus}
        styleButton={styleAddRemove.iconContainer}
        styleIcon={styleIcon.iconMid}
        onPress={() => console.log('pressed!')}
      />
      <View style={styleAddRemove.view}>
        <Text style={styleAddRemove.textValue}>{quant}</Text>
        <Text style={styleAddRemove.text}>{measure}</Text>
      </View>
      <IconButton
        icon={plus}
        styleButton={styleAddRemove.iconContainer}
        styleIcon={styleIcon.iconMid}
        onPress={() => console.log('pressed!')}
      />
    </View>
  );
};

export default AddRemoveItem;
