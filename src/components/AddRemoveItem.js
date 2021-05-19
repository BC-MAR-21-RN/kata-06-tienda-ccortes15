import React from 'react';
import {TouchableHighlight} from 'react-native';
import {Icon} from '.';
import {styleAddRemove, styleIcon} from '../library/styles';

const AddRemoveItem = ({remove}) => {
  const AddIcon = (
    <Icon
      icon={require('../assets/icons/arrow-right.png')}
      style={styleIcon.iconMid}
    />
  );
  const RemoveIcon = (
    <Icon
      icon={require('../assets/icons/arrow-right.png')}
      style={styleIcon.iconMid}
    />
  );

  return (
    <TouchableHighlight
      style={styleAddRemove.container}
      activeOpacity={0.6}
      underlayColor="#DDDDDD">
      {remove ? RemoveIcon : AddIcon}
    </TouchableHighlight>
  );
};

export default AddRemoveItem;
