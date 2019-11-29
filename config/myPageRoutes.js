import {createStackNavigator} from 'react-navigation-stack';
import Discover from '../views/discover';
import Discovering from '../views/discovering';
import Result from '../views/result';
import {createAppContainer} from 'react-navigation';

import React, {Component} from 'react';
import {Image, PixelRatio, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import MyPage from '../views/myPage';
import Setting from '../views/setting';

const MyPageTab = createStackNavigator({
    MyPage: {
        screen: MyPage,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                borderBottomWidth: 0,
                height: 57,
            },

            headerRight: <View/>,
            headerTitle: (
                <View>
                    <Text style={{
                        fontFamily: 'Montserrat',
                        fontSize: 17.5,
                        fontWeight: 'bold',
                        fontStyle: 'normal',
                        lineHeight: 36,
                        letterSpacing: -0.35,
                        color: '#323643',
                    }}>MyPage</Text>
                </View>
            ),
            headerLeft: (
                <View/>
            ),
        }),
    },
    Result: {
        screen: Setting,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                borderBottomWidth: 0,
                height: 57,
            },

            headerRight: <View/>,
            headerTitle: (
                <View>
                    <Text style={{
                        fontFamily: 'Montserrat',
                        fontSize: 17.5,
                        fontWeight: 'bold',
                        fontStyle: 'normal',
                        lineHeight: 36,
                        letterSpacing: -0.35,
                        color: '#323643',
                    }}>Setting</Text>
                </View>
            ),
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/backBtn.png')}
                           style={{
                               width: 20,
                               height: 12,
                               marginLeft: 24,
                           }}/>
                </TouchableOpacity>
            ),
        }),
    },
});


export default createAppContainer(MyPageTab);



