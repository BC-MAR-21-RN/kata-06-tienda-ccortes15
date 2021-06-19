import {
  Details,
  Home,
  MyOrder,
  OrderComplete,
  YourOrder,
} from '../../containers';
import {
  archive,
  bell,
  cart,
  home,
  logOut,
  message,
  phone,
  tag,
} from '../constants/icons';
import { signOut } from './firebaseAuth';

const drawerItems = navigation => {
  return [
    {
      icon: home,
      text: 'Home',
      onPress: () => navigation.jumpTo('Home'),
    },
    {
      icon: cart,
      text: 'My Orders',
      onPress: () => navigation.jumpTo('YourOrders'),
    },
    {
      icon: tag,
      text: 'Offers',
    },
    {
      icon: bell,
      text: 'Notifications',
    },
    {
      icon: archive,
      text: 'Our Brances',
    },
    {
      icon: phone,
      text: 'Contact Us',
    },
    {
      icon: message,
      text: 'Feedback',
    },
    {
      icon: logOut,
      text: 'Logout',
      onPress: () => signOut(navigation),
    },
  ];
};

const drawerScreens = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Details',
    component: Details,
  },
  {
    name: 'MyOrders',
    component: MyOrder,
  },
  {
    name: 'YourOrders',
    component: YourOrder,
  },
  {
    name: 'OrderScreen',
    component: OrderComplete,
  },
];

export {drawerItems, drawerScreens};
