import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Login from '../views/login'
import Main from '../views/main'
import Discover from '../views/discover'
import Survey from '../views/survey'

import tabNav from "./tabNav";


import tmp from '../views/deep'


const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    },
    Survey: {
        screen: Survey,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                borderBottomWidth: 0,
                height: 57,
            },

            headerRight: <View/>,
            headerTitle: (
                <View>
                    <Text style={{
                        height: 36,
                        fontFamily: "Montserrat",
                        fontSize: 17.5,
                        fontWeight: "bold",
                        fontStyle: "normal",
                        lineHeight: 36,
                        letterSpacing: -0.35,
                        color: "#323643"
                    }}>Survey</Text>
                </View>
            ),
            headerLeft: (
                <View/>
            ),
        }),
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
