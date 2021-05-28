import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Icon, IconButton } from '.';
import { styleAddRemove, styleIcon } from '../library/styles';
import { minus, plus } from '../library/constants/icons'
import { colors } from '../library/constants/colors';

const AddRemoveItem = ({measure}) => {
  const onPress = () => alert('pressed!');

  return (
    <View style={styleAddRemove.container}>
      <IconButton
        onPress={onPress}
        icon={minus}
        styleButton={styleAddRemove.iconContainer}
        styleIcon={styleIcon.iconMid}
        underlay={colors.white} />
      <View style={styleAddRemove.view}>
        <Text style={styleAddRemove.textValue}>1</Text>
        <Text style={styleAddRemove.text}>{measure}</Text>
      </View>
      <IconButton
        onPress={onPress}
        icon={plus}
        styleButton={styleAddRemove.iconContainer}
        styleIcon={styleIcon.iconMid}
        underlay={colors.white} />
    </View>
  );
};

export default AddRemoveItem;
