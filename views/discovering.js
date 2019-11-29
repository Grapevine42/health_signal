import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image, TextInput, Animated} from 'react-native';
import {calHeight, calWidth} from '../config/widthAndHeight';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            progressBar: 0,
            value1: new Animated.Value(0),
            value2: new Animated.Value(0),
            value3: new Animated.Value(0),
        };
    }


    componentDidMount() {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    this.progressIng(228 / 3 * 2, 228);

                    Animated.timing(this.state.value3, {
                        toValue: 1,
                        delay: 200,
                        duration: 1000,
                    }).start();


                    setTimeout(()=>{
                        this.props.navigation.navigate('Result');
                    }, 300)


                }, 2300);
                this.progressIng(228 / 3, 228 / 3 * 2);

                Animated.timing(this.state.value2, {
                    toValue: 1,
                    delay: 200,
                    duration: 1000,
                }).start();


            }, 3200);
            this.progressIng(0, 228 / 3);

            Animated.timing(this.state.value1, {
                toValue: 1,
                delay: 200,
                duration: 1000,
            }).start();

        }, 1600);

    }


    progressIng(pre, next) {
        this.setState(
            {
                progressBar: new Animated.Value(pre),
            },
            () => {
                Animated.timing(this.state.progressBar, {
                    toValue: next,
                    duration: 1000,
                }).start();
            });
    }


    _getImgStyle(num) {
        switch (num) {
            case 1:
                return {
                    width: 14,
                    position: 'absolute',
                    zIndex: 999,
                    marginLeft: 12,
                    height: 12,
                    opacity: this.state.value1,
                };

            case 2:
                return {
                    width: 14,
                    position: 'absolute',
                    zIndex: 999,
                    marginLeft: 12,
                    height: 12,
                    opacity: this.state.value2,
                };

            case 3:
                return {
                    width: 14,
                    position: 'absolute',
                    zIndex: 999,
                    marginLeft: 12,
                    height: 12,
                    opacity: this.state.value3,
                };

        }

    }

    _getStyle() {
        return {width: this.state.progressBar};
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>

                <View style={{alignItems: 'center'}}>
                    <Image
                        style={{width: 375, height: 252}}
                        source={require('../assets/images/discover/discovering_logo.png')}
                    />

                    <View style={styles.notBar}>

                        <Animated.View
                            style={[
                                styles.okBar,
                                this._getStyle(),
                                {
                                    backgroundColor: '#00d793',
                                },
                            ]}
                        />


                        {/*<View style={styles.okBar}>*/}
                        {/*</View>*/}
                    </View>


                    <Text style={styles.ingTxt}>당신의 데이터를 <Text style={{color: '#042C5C', fontWeight: 'bold'}}>분석중</Text>입니다...</Text>


                </View>


                <View style={{marginTop: 25, marginLeft: 41}}>


                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 36}}>
                        <Animated.Image
                            style={this._getImgStyle(1)}
                            source={require('../assets/images/discover/icon_check.png')}
                        />
                        <View style={styles.checkBox}></View>
                        <Text style={styles.discoverTxt}>Analytics 1. 사진첩 분석</Text>
                    </View>

                    <Image
                        style={styles.solidLine}
                        source={require('../assets/images/discover/line.png')}
                    />


                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

                        <Animated.Image
                            style={this._getImgStyle(2)}
                            source={require('../assets/images/discover/icon_check.png')}
                        />
                        <View style={styles.checkBox}></View>
                        <Text style={styles.discoverTxt}>Analytics 2. 나의 인스타그램 분석</Text>
                    </View>


                    <Image
                        style={styles.solidLine}
                        source={require('../assets/images/discover/line.png')}
                    />

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <Animated.Image
                            style={this._getImgStyle(3)}
                            source={require('../assets/images/discover/icon_check.png')}
                        />
                        <View style={styles.checkBox}></View>
                        <Text style={styles.discoverTxt}>Analytics 3. 나의 소비데이터 분석</Text>
                    </View>


                </View>


            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({


    topBg: {
        width: 375,
        height: 252,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
    },

    ingTxt: {
        fontFamily: 'NanumBarunGothic',
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0.12,
        textAlign: 'center',
        color: '#77869e',
        marginTop: 18,
    },

    notBar: {
        width: 228,
        height: 12,
        borderRadius: 10,
        backgroundColor: '#dbdfef',
        marginTop: -85,
    },
    okBar: {
        height: 12,
        borderRadius: 10,
        backgroundColor: '#00D793',
    },
    checkBox: {
        width: 39,
        height: 39,
        borderRadius: 6,
        backgroundColor: '#ffffff',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 21,
        shadowOpacity: 1,
    },
    discoverTxt: {
        marginLeft: 23,
        opacity: 0.9,
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 28,
        letterSpacing: -0.26,
        color: '#042c5c',
    },
    solidLine: {
        width: 3, height: 22, marginLeft: 18, marginTop: 9,
    },
    check: {
        width: 14,
        position: 'absolute',
        zIndex: 999,
        marginLeft: 12,
        height: 12,
        opacity: 0,
    },
});
