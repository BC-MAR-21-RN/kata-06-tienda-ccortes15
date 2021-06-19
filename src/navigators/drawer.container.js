import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CreateAccount, LetsStart, SignIn} from '../containers';
import {colors} from '../library/constants/colors';
import {DrawerContent} from '../components';
import {drawerScreens} from '../library/methods/drawer';

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
  const screens = drawerScreens;

  return (
    <Drawer.Navigator
      drawerStyle={{backgroundColor: colors.green}}
      initialRouteName="Shop"
      drawerContent={DrawerContent}>
      <Drawer.Screen
        name="Shop"
        component={LetsStart}
        options={{swipeEnabled: false}}
      />
      <Drawer.Screen
        name="SignIn"
        component={SignIn}
        options={{swipeEnabled: false}}
      />
      <Drawer.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{swipeEnabled: false}}
      />
      {screens.map(screen => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerContainer;
