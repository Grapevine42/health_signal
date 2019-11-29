import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image, TextInput} from 'react-native';
import {calHeight, calWidth} from "../config/widthAndHeight";

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.top}>




                </View>

            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({


    top: {
        width: calWidth(375),
        height: calHeight(320),
        paddingTop: calHeight(85),
        alignItems: 'center'
    },
    bottom: {
        width: calWidth(375),
        height: calHeight(328),
        backgroundColor: '#0047CC',
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,

    },

});
