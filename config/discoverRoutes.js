import {createStackNavigator} from 'react-navigation-stack';
import Discover from '../views/discover';
import Discovering from '../views/discovering';
import Result from '../views/result';
import Deep from '../views/deep';
import Deep2 from '../views/deep2';
import {createAppContainer} from 'react-navigation';

import React, {Component} from 'react';
import {Image, PixelRatio, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DiscoverTab = createStackNavigator({
    Discover: {
        screen: Discover,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    },
    Discovering: {
        screen: Discovering,
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
                    }}>Discover</Text>
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
    Result: {
        screen: Result,
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
                    }}>Discover</Text>
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
    Deep: {
        screen: Deep,
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
                    }}>Deep Learning</Text>
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
    Deep2: {
        screen: Deep2,
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
                    }}>Deep Learning</Text>
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
    }
});


export default createAppContainer(DiscoverTab);



