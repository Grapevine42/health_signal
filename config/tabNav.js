import {createBottomTabNavigator} from "react-navigation-tabs";
import Main from "../views/main";
import {Image} from "react-native";
import React from "react";
import {createAppContainer} from "react-navigation";

import DiscoverTab from './discoverRoutes'
import MyPageTab from './myPageRoutes'

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
        screen: DiscoverTab,
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
        screen: MyPageTab,
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
