import React from 'react';
import {TouchableHighlight} from 'react-native';
import {Icon} from '.';

const IconButton = ({styleButton, styleIcon, icon, onPress, underlay}) => {
  return (
    <TouchableHighlight
      style={styleButton}
      underlayColor={underlay}
      onPress={onPress}>
      <Icon icon={icon} style={styleIcon} />
    </TouchableHighlight>
  );
};

export default IconButton;
