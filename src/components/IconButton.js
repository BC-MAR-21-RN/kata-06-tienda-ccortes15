import React from 'react';
import {TouchableHighlight} from 'react-native';
import {Icon} from '.';

const IconButton = ({styleButton, styleIcon, icon, onPress}) => {
  return (
    <TouchableHighlight
      style={styleButton}
      underlayColor="transparent"
      onPress={onPress}>
      <Icon icon={icon} style={styleIcon} />
    </TouchableHighlight>
  );
};

export default IconButton;
