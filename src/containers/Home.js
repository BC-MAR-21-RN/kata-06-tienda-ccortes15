import React from 'react'
import { Button, StatusBar, View } from 'react-native';
import { HeaderComponent, ProductItem } from '../components';
import { colors } from '../library/constants/colors';
import { styleHome } from '../library/styles';

const Home = ({ navigation }) => {
    const data = {
        order: 2341,
        productList: [
            {
                id: 1,
                image: require('../../img/cover.jpg'),
                name: 'brocoli',
                quant: 2,
                measure: 'Kg',
                price: 3.14,
            },
            {
                id: 2,
                image: require('../../img/cover.jpg'),
                name: 'apple',
                quant: 2,
                measure: 'p',
                price: 4.0,
            },
            {
                id: 3,
                image: require('../../img/cover.jpg'),
                name: 'kale',
                quant: 300,
                measure: 'g',
                price: 2.5,
            },
            {
                id: 4,
                image: require('../../img/cover.jpg'),
                name: 'apple',
                quant: 2,
                measure: 'p',
                price: 4.0,
            },
            {
                id: 5,
                image: require('../../img/cover.jpg'),
                name: 'kale',
                quant: 300,
                measure: 'g',
                price: 2.5,
            },
        ],
    };

    return (
        <View>
            <HeaderComponent title="Home" />
            <Button title="details" onPress={() => (navigation.navigate('Detail'))} />
            <Button title="MyOrders" onPress={() => navigation.navigate('MyOrders')} />
            <Button title="YouOrders" onPress={() => navigation.navigate('YourOrders')} />
            <Button title="Orders" onPress={() => navigation.navigate('OrderScreen')} />
            <View style={styleHome.container}>
                {data.productList.map((item) => (
                    <ProductItem key={item.id} product={item} />
                ))}
            </View>
        </View>
    )
}

export default Home;