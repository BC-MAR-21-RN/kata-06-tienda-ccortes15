import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Icon} from '.';
import {styleIcon, stylePrimaryButton} from '../library/styles';

const PrimaryButton = ({
  styleButton,
  styleText,
  text,
  onPress,
  icon,
  borderButton,
}) => {
  const iconItem = (
    <Icon
      icon={require('../assets/icons/arrow-right.png')}
      style={styleIcon.iconSmall}
    />
  );

  return (
    <View>
      <TouchableHighlight
        style={styleButton}
        activeOpacity={0.6}
        underlayColor={borderButton ? '#DDDDDD' : '#227A70'}
        onPress={onPress}>
        <View style={stylePrimaryButton.container}>
          {icon && iconItem}
          <Text style={styleText}>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default PrimaryButton;
