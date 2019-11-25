import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image, TextInput, StatusBar} from 'react-native';
import {calHeight, calWidth} from "../config/widthAndHeight";

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
                <StatusBar backgroundColor="blue" barStyle="default"/>


                <Text style={styles.logoTxt}>
                    Discover
                </Text>

                <Text style={styles.middleTxt}>
                    딥러닝 기반으로 사진첩, SNS(인스타그램)
                    소비데이터에서 <Text style={styles.middleTxt1}>건강패턴을 종합 분석하여</Text> 당신에게 맞춤 보험시스템으로 제공됩니다.
                </Text>


                <Image
                    style={{width: 289, height: 207, marginTop: 38}}
                    source={require('../assets/images/discover/discover_logo.png')}
                />


                <View style={styles.btnStyle}>
                    <Text style={styles.btnTxt}>분석하기</Text>

                </View>


            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({


    logoTxt: {
        fontFamily: "Montserrat",
        fontSize: 17.5,
        marginTop: 10,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: -0.35,
        color: "#323643"
    },

    middleTxt: {
        width: 260,
        height: 72,
        fontFamily: "NanumBarunGothic",
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.12,
        textAlign: "center",
        color: "#77869e",
        marginTop: 50
    },
    middleTxt1: {
        width: 260,
        height: 72,
        fontFamily: "NanumBarunGothic",
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.12,
        textAlign: "center",
        color: 'rgb(4,44,92)'
    },

    btnStyle: {
        width: 297,
        height: 48,
        borderRadius: 6,
        marginTop: 55,
        backgroundColor: "#00d793",
        alignItems:'center',
        justifyContent:'center'
    },
    btnTxt: {
        width: 59,
        height: 19,
        fontFamily: "NanumBarunGothic",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.4,
        color: "#ffffff"
    }


});
