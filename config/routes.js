import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Login from '../views/login'
import Main from '../views/main'
import Discover from '../views/discover'


const AppNavigator = createStackNavigator({
    Login: {
        screen: Main,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    },
});


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Main,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                !focused
                    ? <Image source={require('../assets/images/bottom/homeOff.png')}
                             style={{width: 75, height: 50, marginTop: 15}}/>
                    : <Image source={require('../assets/images/bottom/home.png')}
                             style={{width: 75, height: 50, marginTop: 15}}/>
            ),
            tabBarOptions: {
                style:{
                    width: 375,
                    height: 65,
                    borderTopColor: 'transparent',

                    backgroundColor: "#ffffff",
                    shadowColor: "rgba(0, 0, 0, 0.03)",
                    shadowOffset: {
                        width: 0,
                        height: -10
                    },
                    shadowRadius: 20,
                    shadowOpacity: 1
                },
                showLabel: false,
            },

        },
    },
    Discover:{
        screen: Discover,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                !focused
                    ? <Image source={require('../assets/images/bottom/discoverOff.png')}
                             style={{width: 75, height: 50, marginTop: 15}}/>
                    : <Image source={require('../assets/images/bottom/discover.png')}
                             style={{width: 75, height: 50, marginTop: 15}}/>
            ),
            tabBarOptions: {
                style:{
                    width: 375,
                    height: 65,
                    borderTopColor: 'transparent',

                    backgroundColor: "#ffffff",
                    shadowColor: "rgba(0, 0, 0, 0.03)",
                    shadowOffset: {
                        width: 0,
                        height: -10
                    },
                    shadowRadius: 20,
                    shadowOpacity: 1
                },
                showLabel: false,

            }
        },
    },
    MyPage: {
        screen: Main,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                !focused
                    ? <Image source={require('../assets/images/bottom/MyPageOff.png')}
                             style={{width: 75, height: 50, marginTop: 15}}/>
                    : <Image source={require('../assets/images/bottom/myPage.png')}
                             style={{width: 75, height: 50, marginTop: 15}}/>
            ),
            tabBarOptions: {
                style:{
                    width: 375,
                    height: 65,
                    borderTopColor: 'transparent',

                    backgroundColor: "#ffffff",
                    shadowColor: "rgba(0, 0, 0, 0.03)",
                    shadowOffset: {
                        width: 0,
                        height: -10
                    },
                    shadowRadius: 20,
                    shadowOpacity: 1
                },
                showLabel: false,

            }
        },
    }
});

export default createAppContainer(TabNavigator);
