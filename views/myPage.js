import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image, TextInput, StatusBar} from 'react-native';
import {calHeight, calWidth} from '../config/widthAndHeight';
import {ScrollView} from 'react-navigation';


let data = {
    'name': '홍길동',
    'sex': '0',
    'birth': '19990322',
    'height': '175',
    'weight': '65',
    'job': '3',
    'family': 'Y',
    'smoke': '아니오',
    'age': '30대',
};

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <StatusBar barStyle="dark-content" />

                <ScrollView>
                    <View style={styles.top}>

                        <View style={{alignItems: 'center'}}>

                            <Image source={require('../assets/images/myPage/profile.png')} style={{
                                width: 83, marginTop: 15,
                                resizeMode: 'contain'
                            }}/>


                            <Text style={styles.name}>임현우</Text>
                            <Text style={styles.info}>1984.09.12 / 30대 / 남성</Text>

                            <View style={styles.bar}/>

                            <View style={{flexDirection: 'row', marginTop: 12, marginLeft: 25}}>

                                <View>
                                    <Text style={styles.text1}>직업군 유형</Text>
                                    <Text style={styles.text2}>관리자(사무직)</Text>
                                </View>

                                <View style={{marginLeft: 20}}>
                                    <Text style={styles.text1}>키/몸무게</Text>
                                    <Text style={styles.text2}>175/65</Text>
                                </View>

                                <View>
                                    <Text style={styles.text1}>가족력 여부</Text>
                                    <Text style={styles.text2}>예(있음)</Text>
                                </View>

                                <View>
                                    <Text style={styles.text1}>흡연 여부</Text>
                                    <Text style={styles.text2}>아니오</Text>
                                </View>


                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.insure}>가입된 보혐현황<Text style={{color: '#00d793'}}> 1</Text></Text>
                    </View>

                    <View style={styles.insureCard}>

                        <View style={{width: 222}}>
                            <Image source={require('../assets/images/myPage/dbLogo.jpg')}
                                   style={{width: 216 / 3, height: 63 / 3, marginLeft: 20, marginTop: 11}}/>

                            <Text style={styles.insureTxt}>(무)I’mOK 암보험</Text>
                        </View>

                        <View style={styles.middleLine}/>

                        <View>
                            <Text style={styles.rightTitle}>기본 보험료</Text>
                            <Text style={styles.rightTxt}>80,000원</Text>
                        </View>

                    </View>


                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.insure, {marginTop: 40, width: 143}]}>나의 생활/식습관 패턴</Text>
                        <Image source={require('../assets/images/myPage/calendar.png')}
                               style={{width: 36 / 3, height: 39 / 3, marginTop: 42, marginLeft: 32}}/>

                        <Text style={styles.calTxt}>2019.11.24 ~ 2019.11.30 </Text>
                    </View>


                    <View style={{flexDirection: 'row', marginTop: 33, marginLeft: 20, alignItems: 'center'}}>
                        <Image source={require('../assets/images/myPage/OK.png')}
                               style={{width: 31, height: 30}}/>
                        <Text style={styles.titleTxt}>비교적 건강 😊</Text>
                    </View>

                    <Image source={require('../assets/images/myPage/card.png')}
                           style={{width: 375, height: 546, marginTop: -40}}/>

                           <View style={{marginTop: -30}}>

                               <Text style={{
                                   width: 128,
                                   height: 20,
                                   fontFamily: 'NanumBarunGothic',
                                   marginLeft: 33,
                                   fontSize: 12,
                                   fontWeight: 'normal',
                                   fontStyle: 'normal',
                                   lineHeight: 20,
                                   letterSpacing: 0.09,
                                   color: '#77869e',
                               }}>전월대비 보험료 절약 추이</Text>

                               <Text style={{
                                   width: 252,
                                   height: 20,
                                   fontFamily: 'NanumBarunGothic',
                                   fontSize: 15,
                                   fontWeight: 'bold',
                                   fontStyle: 'normal',
                                   lineHeight: 20,
                                   letterSpacing: 0.12,
                                   color: '#042c5c', marginLeft: 33,
                                   marginTop: 10,
                                   marginBottom: 40
                               }}>

                                   아직 전월 대비 비교할 데이터가 없습니다.

                               </Text>
                           </View>



                </ScrollView>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({


    top: {
        width: 375,
        height: 299,
        backgroundColor: '#0047cc',
    },
    name: {
        width: 63,
        height: 28,
        opacity: 0.9,
        fontFamily: 'NanumBarunGothic',
        fontSize: 23,
        fontWeight: '300',
        fontStyle: 'normal',
        lineHeight: 28,
        letterSpacing: 0.45,
        color: '#ffffff',
        marginTop: 13,
    },

    info: {
        width: 147,
        height: 15,
        fontFamily: 'NanumBarunGothic',
        fontSize: 13.5,
        marginTop: 9,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 15,
        letterSpacing: 0,
        color: '#00d793',
    },

    bar: {
        width: 326,
        height: 1,
        opacity: 0.5,
        borderStyle: 'solid',
        borderWidth: 0.3,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        marginTop: 30,
    },

    text1: {
        width: 62,
        height: 20,
        fontFamily: 'NanumBarunGothic',
        fontSize: 13,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.1,
        color: '#58b9ff',
    },
    text2: {
        width: 82,
        height: 20,
        opacity: 0.81,
        fontFamily: 'NanumBarunGothic',
        fontSize: 13,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.1,
        marginTop: 9,
        color: '#ffffff',
    },

    insure: {
        height: 17,
        fontFamily: 'NanumBarunGothic',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.72,
        color: '#77869e',
        marginLeft: 20,
        marginTop: 30,
    },

    insureCard: {
        width: 331,
        height: 77,
        borderRadius: 14,
        backgroundColor: '#ffffff',
        shadowColor: 'rgba(0, 0, 0, 0.06)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 15,
        marginLeft: 20,
        marginTop: 14,
        shadowOpacity: 1,
        flexDirection: 'row',
    },

    insureTxt: {
        width: 122,
        height: 20,
        fontFamily: 'NanumBarunGothic',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#042c5c',
        marginLeft: 20,
        marginTop: 8,
    },

    middleLine: {
        width: 1,
        height: 49,
        marginTop: 16,
        opacity: 0.45,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#77869e',
    },


    rightTitle: {
        width: 57,
        marginLeft: 18,
        marginTop: 15,
        height: 20,
        fontFamily: 'NanumBarunGothic',
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.09,
        color: '#77869e',
    },
    rightTxt: {
        height: 20,
        fontFamily: 'NanumBarunGothic',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#042c5c',
        marginLeft: 20,
        marginTop: 3,
    },
    calTxt: {
        width: 136,
        marginTop: 41,
        height: 15,
        opacity: 0.61,
        fontFamily: 'NanumBarunGothic',
        fontSize: 13,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: -0.76,
        color: '#77869e',
        marginLeft: 8,
    },
    titleTxt: {
        width: 172,
        height: 39,
        fontFamily: "NanumBarunGothic",
        fontSize: 30,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.67,
        color: "#20e0a5",
        marginLeft: 8

    },

});
