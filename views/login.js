import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {calHeight, calWidth} from "../config/widthAndHeight";

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.top}>

                    <Text style={styles.topTxt}>당신의 건강신호에 따라</Text>
                    <Text style={styles.bottomTxt}>보험을
                        <Text style={styles.boldTxt}> 추천</Text>해주고, 보험비를
                        <Text style={styles.boldTxt}> 할인</Text>할인해주는</Text>


                    <Image
                        style={{width: calWidth(159), height: calHeight(70), marginTop: calHeight(34)}}
                        source={require('../assets/images/logo.png')}
                    />

                </View>


                <View style={styles.bottom}>


                    <Text style={styles.inputLabel}>ID</Text>

                    <TextInput onChangeText={(pwdEmail) => this.setState({pwdEmail})}
                               autoCapitalize='none'
                               keyboardType={'email-address'}
                               style={{
                                   alignItems: 'center',
                                   width: calWidth(295),
                                   marginTop: -calHeight(20),
                                   borderBottomColor: 'rgba(255, 255, 255, .42)',
                                   fontSize: 16,
                                   marginLeft: calWidth(40),
                                   borderBottomWidth: 1,
                                   paddingBottom: calHeight(15),
                                   paddingLeft: calWidth(40),
                                   fontFamily: 'NanumBarunGothicLight',
                                   color: 'white',
                               }}></TextInput>

                    <Text style={styles.inputLabel2}>PW</Text>

                    <TextInput onChangeText={(pwdEmail) => this.setState({pwdEmail})}
                               autoCapitalize='none'
                               autoCompleteType={'password'}
                               secureTextEntry={true}
                               style={{
                                   alignItems: 'center',
                                   marginLeft: calWidth(40),
                                   width: calWidth(295),
                                   marginTop: -calHeight(20),
                                   paddingLeft: calWidth(40),
                                   borderBottomColor: 'rgba(255, 255, 255, .42)',
                                   fontFamily: 'NanumBarunGothicLight',
                                   fontSize: 16,
                                   paddingBottom: calHeight(15),
                                   borderBottomWidth: 1,
                                   color: 'white',

                               }}/>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>

                        <View style={styles.loginBtn}>
                            <Text style={{
                                fontWeight: 'bold', color: '#FFFFFF', fontSize: 16,
                                fontFamily: 'Montserrat'
                            }}>Login</Text>

                        </View>
                    </TouchableOpacity>


                </View>

            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({

    inputLabel: {
        color: '#00D793',
        fontSize: 16,
        marginLeft: calWidth(50),
        fontWeight: 'bold',
        fontFamily: 'NanumBarunGothic',
        marginTop: calHeight(80),
    },

    inputLabel2: {
        color: '#00D793',
        fontSize: 16,
        marginLeft: calWidth(45),
        fontWeight: 'bold',
        fontFamily: 'NanumBarunGothic',
        marginTop: calHeight(50)
    },

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

    topTxt: {
        fontSize: 18,
        color: '#77869E',
        fontWeight: 'bold',
        fontFamily: 'NanumBarunGothic'
    },
    bottomTxt: {
        fontSize: 16,
        color: '#77869E',
        lineHeight: 36,
        fontFamily: 'NanumBarunGothicLight',
    },
    boldTxt: {
        fontSize: 16,
        color: '#042C5C',
        textAlign: 'center',
        lineHeight: 30,
        fontWeight: 'bold'
    },
    loginBtn: {
        width: calWidth(297),
        height: calHeight(48),
        marginTop: calHeight(40),
        backgroundColor: '#00D793',
        borderRadius: 5,
        marginLeft: calWidth(40),

        alignItems: 'center',
        justifyContent: 'center',
    }
});
