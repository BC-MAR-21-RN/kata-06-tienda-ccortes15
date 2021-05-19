import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { styleRowContainer } from '../library/styles';

const PrimaryButton = ({ style, text, onPress, icon, borderButton }) => {
    return (
        <View>
            <TouchableHighlight
                style={style.button}
                activeOpacity={0.6}
                underlayColor={borderButton ? "#DDDDDD" : '#227A70'}
                onPress={onPress}>
                <View style={styleRowContainer.rowContainer}>
                    {icon && icon}
                    <Text style={style.text}>{text}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default PrimaryButton;