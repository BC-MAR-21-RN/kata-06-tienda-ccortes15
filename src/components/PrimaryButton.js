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
      icon={icon}
      style={[styleIcon.iconMid, stylePrimaryButton.icon]}
    />
  );

  return (
    <View>
      <TouchableHighlight
        style={styleButton}
        activeOpacity={0.6}
        underlayColor='transparent'
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
