import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Icon} from '.';
import {styleRowContainer, styleIcon} from '../library/styles';

const PrimaryButton = ({style, text, onPress, icon, borderButton}) => {
  const iconItem = (
    <Icon
      icon={require('../assets/icons/arrow-right.png')}
      style={styleIcon.iconSmall}
    />
  );

  return (
    <View>
      <TouchableHighlight
        style={style.button}
        activeOpacity={0.6}
        underlayColor={borderButton ? '#DDDDDD' : '#227A70'}
        onPress={onPress}>
        <View style={styleRowContainer.rowContainer}>
          {icon && iconItem}
          <Text style={style.text}>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default PrimaryButton;
