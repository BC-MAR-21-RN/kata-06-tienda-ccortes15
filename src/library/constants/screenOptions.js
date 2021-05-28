import React from 'react';
import { IconButton } from '../../components';
import { styleHeaderIcon } from '../styles';
import { colors } from './colors';
import { cart, menu } from './icons';


export const homeOptions = {
    headerStyle: {
        backgroundColor: colors.green,
        height: 100,
    },
    headerTintColor: colors.white,
    headerTitleAlign: 'center',
    headerTitle: 'Home',
    headerTitleStyle: {
        fontSize: 28
    },
    headerLeftContainerStyle: {
        marginLeft: 20
    },
    headerRightContainerStyle: {
        marginRight: 20
    },
    headerLeft: () => (<IconButton icon={menu} styleIcon={styleHeaderIcon.whiteIcon} underlay={colors.green} onPress={() => alert('pressed!')} />),
    headerRight: () => (<IconButton icon={cart} styleIcon={styleHeaderIcon.whiteIcon} underlay={colors.green} onPress={() => alert('pressed!')} />)
}

export const detailsOptions = {
    headerStyle: {
        backgroundColor: colors.white,
        height: 100,
    },
    headerTintColor: colors.gray,
    headerTitleAlign: 'center',
    headerTitle: 'Details',
    headerTitleStyle: {
        fontSize: 28
    },
    headerLeftContainerStyle: {
        marginLeft: 20
    },
    headerRightContainerStyle: {
        marginRight: 20
    },
    headerLeft: () => (<IconButton icon={menu} styleIcon={styleHeaderIcon.grayIcon} underlay={colors.white} onPress={() => alert('pressed!')} />),
    headerRight: () => (<IconButton icon={cart} styleIcon={styleHeaderIcon.grayIcon} underlay={colors.white} onPress={() => alert('pressed!')} />)
}