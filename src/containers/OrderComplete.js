import React from 'react';
import { Dimensions, Image, ImageBackground, StatusBar, Text, View } from 'react-native';
import { colors } from '../library/constants/colors';
import { styleOrderComplete } from '../library/styles';

const OrderComplete = () => {
    return (
        <View style={styleOrderComplete.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.green} />
            <View style={styleOrderComplete.viewDown}>
                <Text style={styleOrderComplete.text}>Order placed.</Text>
                <Text style={styleOrderComplete.text}>Your order number is</Text>
                <Text style={styleOrderComplete.number}>#3243</Text>
            </View>
            <View style={styleOrderComplete.imageContainer}>
                <Image 
                    source={require('../../img/store.png')}
                    style={styleOrderComplete.image} />
            </View>
        </View>
    )
}

export default OrderComplete;