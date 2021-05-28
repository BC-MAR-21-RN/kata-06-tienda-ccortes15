import React from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { AddRemoveItem, ImageContainer, PrimaryButton } from '../components';
import { colors } from '../library/constants/colors';
import { styleDetails, styleLayout, stylePrimaryButton } from '../library/styles';

const Details = () => {
    const product = {
        image: require('../../img/cover.jpg'),
        name: 'Cabbage',
        price: 15,
        detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.`,
        measure: 'Kg'
    }

    return (
        <ScrollView style={styleLayout.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <View style={styleLayout.itemContainer}>
                <ImageContainer image={product.image} />
                <Text style={styleDetails.name}>{product.name}</Text>
                <Text style={styleDetails.price}>${product.price}</Text>
                <Text style={styleDetails.text}>{product.detail}</Text>
                <View style={styleLayout.itemContainer}>
                    <AddRemoveItem measure={product.measure} />
                </View>
            </View>
            <PrimaryButton
                text="Add to cart"
                onPress={() => alert('pressed!')}
                styleButton={stylePrimaryButton.button}
                styleText={stylePrimaryButton.text} />
        </ScrollView>
    )
}

export default Details;