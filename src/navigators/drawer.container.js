import React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { CreateAccount, Details, Home, LetsStart, MyOrder, OrderComplete, SignIn, YourOrder } from '../containers';
import { colors } from '../library/constants/colors';
import { DrawerContent } from '../components';

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
    const screens = [
        {
            name: 'Home',
            component: Home
        },
        {
            name: 'Details',
            component: Details
        },
        {
            name: 'MyOrders',
            component: MyOrder
        },
        {
            name: 'YourOrders',
            component: YourOrder
        },
        {
            name: 'OrderScreen',
            component: OrderComplete
        }
    ]

    return (
        <Drawer.Navigator
            drawerStyle={{ backgroundColor: colors.green }}
            initialRouteName="Shop"
            drawerContent={DrawerContent}>
            <Drawer.Screen name="Shop" component={LetsStart} options={{ swipeEnabled: false }} />
            <Drawer.Screen name="SignIn" component={SignIn} options={{ swipeEnabled: false }} />
            <Drawer.Screen name="CreateAccount" component={CreateAccount} options={{ swipeEnabled: false }} />
            {screens.map((screen) => (
                <Drawer.Screen key={screen.name} name={screen.name} component={screen.component} />
            ))}
        </Drawer.Navigator>
    );
}

export default DrawerContainer;