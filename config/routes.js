import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Login from '../views/login'
import Main from '../views/main'
import Discover from '../views/discover'

import tabNav from "./tabNav";



const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    },
    Main: {
        screen: tabNav,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    },
});





export default createAppContainer(AppNavigator);
