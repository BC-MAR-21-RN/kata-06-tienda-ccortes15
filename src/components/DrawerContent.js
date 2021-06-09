import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { IconButton, PrimaryButton } from '.';
import { colors } from '../library/constants/colors';
import { archive, bell, cart, home, logOut, menu, message, phone, tag } from '../library/constants/icons';

const DrawerContent = (props) => {
    const items = [
        {
            icon: home,
            text: 'Home',
            onPress: () => props.navigation.jumpTo('Home')
        },
        {
            icon: cart,
            text: 'My Orders',
            onPress: () => props.navigation.jumpTo('YourOrders')
        },
        {
            icon: tag,
            text: 'Offers'
        },
        {
            icon: bell,
            text: 'Notifications'
        },
        {
            icon: archive,
            text: 'Our Brances'
        },
        {
            icon: phone,
            text: 'Contact Us'
        },
        {
            icon: message,
            text: 'Feedback'
        },
        {
            icon: logOut,
            text: 'Logout'
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 40, fontStyle: 'italic', color: colors.white }}>Vegetablely</Text>
                    <Image
                        source={require('../../img/store.png')}
                        style={{ width: 100, height: 100, backgroundColor: colors.white, borderRadius: 50, marginVertical: 25 }}
                    />
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <IconButton onPress={() => props.navigation.toggleDrawer()} icon={menu} styleIcon={{ width: 40, height: 40, tintColor: colors.white }} />
                    {items.map((item, index) => (
                        <PrimaryButton
                            key={index}
                            onPress={item.onPress}
                            icon={item.icon}
                            text={item.text}
                            styleText={{ color: colors.white, marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}
                            styleButton={{ alignItems: 'flex-start', marginVertical: 20 }} />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default DrawerContent;