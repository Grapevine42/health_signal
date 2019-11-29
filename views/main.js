import React, {Component} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Animated,
} from 'react-native';
import {calHeight, calWidth} from '../config/widthAndHeight';
import {AnimatedGaugeProgress, GaugeProgress} from 'react-native-simple-gauge';
import axios from 'axios';


let outer;

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            isPage: 0,
            positive: 0,
            negative: 0,
            sum: 0,

        };
    }


    componentDidMount() {
        outer = this;
        axios.post('http://192.168.43.224:3434/rekognition/cancerlist')
            .then(function (response) {
                let data = response.data;

                let name = data.insure.split(',');


                outer.setState({
                    positive: data.sumPosi.toLocaleString(),
                    negative: data.sumNega.toLocaleString(),
                    sum: data.minus.toLocaleString(),
                    insure: name[name.length-1]
                });

            });
    }

    _fadeIn() {
        this.setState(
            {
                mon1: new Animated.Value(0),
                mon2: new Animated.Value(0),
                tue1: new Animated.Value(0),
                tue2: new Animated.Value(0),
                wed1: new Animated.Value(0),
                wed2: new Animated.Value(0),
                thu1: new Animated.Value(0),
                thu2: new Animated.Value(0),
                fri1: new Animated.Value(0),
                fri2: new Animated.Value(0),
                sat1: new Animated.Value(0),
                sat2: new Animated.Value(0),
                sun1: new Animated.Value(0),
                sun2: new Animated.Value(0),
            },
            () => {
                Animated.timing(this.state.mon1, {
                    toValue: 80,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.tue1, {
                    toValue: 50,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.wed1, {
                    toValue: 60,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.thu1, {
                    toValue: 50,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.fri1, {
                    toValue: 55,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.sat1, {
                    toValue: 60,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.sun1, {
                    toValue: 34,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.mon2, {
                    toValue: 30,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.tue2, {
                    toValue: 20,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.wed2, {
                    toValue: 20,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.thu2, {
                    toValue: 15,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.fri2, {
                    toValue: 30,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.sat2, {
                    toValue: 40,
                    duration: 1000,
                }).start();

                Animated.timing(this.state.sun2, {
                    toValue: 20,
                    duration: 1000,
                }).start();
            },
        );
    }

    _getStyle(data) {
        switch (data) {
            case 'mon1':
                return {height: this.state.mon1};
            case 'tue1':
                return {height: this.state.tue1};
            case 'wed1':
                return {height: this.state.wed1};
            case 'thu1':
                return {height: this.state.thu1};
            case 'fri1':
                return {height: this.state.fri1};
            case 'sat1':
                return {height: this.state.sat1};
            case 'sun1':
                return {height: this.state.sun1};

            case 'mon2':
                return {height: this.state.mon2};
            case 'tue2':
                return {height: this.state.tue2};
            case 'wed2':
                return {height: this.state.wed2};
            case 'thu2':
                return {height: this.state.thu2};
            case 'fri2':
                return {height: this.state.fri2};
            case 'sat2':
                return {height: this.state.sat2};
            case 'sun2':
                return {height: this.state.sun2};
        }
    }

    render() {
        let card;
        let menu;

        if (this.state.isPage === 0) {
            menu = (
                <View style={styles.menuView}>
                    <View style={{marginLeft: 96}}>
                        <TouchableOpacity onPress={() => this.setState({isPage: 0})}>
                            <Text style={styles.menuTxt}>보험비 현황</Text>
                            <View
                                style={{
                                    width: 65,
                                    height: calHeight(2),
                                    backgroundColor: '#58b9ff',
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{marginLeft: 55}}>
                        <TouchableOpacity
                            onPress={() => [this.setState({isPage: 1}), this._fadeIn()]}>
                            <Text style={styles.menuTxt1}>건강 그래프</Text>
                            <View
                                style={{
                                    width: 65,
                                    height: calHeight(2),
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            );
            card = (
                <View style={[styles.graphView, {alignItems: 'center'}]}>
                    <Text style={styles.timeStyle}>2019.11.25 ~ 2019.11.30</Text>
                    <View style={styles.barStyle}/>
                    <Text style={styles.infoStyle}>
                        당신이<Text style={{fontWeight: 'bold'}}> 절약한 보험비는?</Text>
                    </Text>

                    <AnimatedGaugeProgress
                        size={230}
                        width={14}
                        fill={50}
                        rotation={90}
                        cropDegree={105}
                        tintColor="#0047CC"
                        delay={10}
                        backgroundColor="#DFE7F5"
                        stroke={[2, 2]} //For a equaly dashed line
                        strokeCap="circle"
                        style={{marginTop: calHeight(10)}}
                    />

                    <View style={{marginTop: -calHeight(210), alignItems: 'center'}}>
                        <Image
                            style={{width: calWidth(120)}}
                            resizeMode={'contain'}
                            source={require('../assets/images/main/money.png')}
                        />

                        <Text style={styles.circleTxt}>할인받은 총 보험비</Text>
                        <Text style={styles.circleTxt2}>+{this.state.sum}원</Text>

                        <View style={styles.middleArea}>
                            <Text style={styles.insureName}>{this.state.insure}</Text>
                        </View>

                        <Text
                            style={[
                                styles.percentTxt,
                                {position: 'absolute', top: 175, left: -25},
                            ]}>
                            0%
                        </Text>
                        <Text
                            style={[
                                styles.percentTxt,
                                {position: 'absolute', top: 175, left: 135},
                            ]}>
                            100%
                        </Text>
                    </View>
                </View>
            );
        } else {
            menu = (
                <View style={styles.menuView}>
                    <View style={{marginLeft: 96}}>
                        <TouchableOpacity onPress={() => this.setState({isPage: 0})}>
                            <Text style={styles.menuTxt1}>보험비 현황</Text>
                            <View
                                style={{
                                    width: 65,
                                    height: calHeight(2),
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{marginLeft: 55}}>
                        <TouchableOpacity onPress={() => this.setState({isPage: 1})}>
                            <Text style={styles.menuTxt}>건강 그래프</Text>
                            <View
                                style={{
                                    width: 65,
                                    height: calHeight(2),
                                    backgroundColor: '#58b9ff',
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            );
            card = (
                <View style={styles.graphView}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.timeStyle}>이번주 당신의 건강 패턴</Text>
                        <View style={styles.barStyle}/>

                        <Text style={styles.healthDay}>건강한 한 주를 보내셨군요 💪</Text>

                        <View style={{flexDirection: 'row', marginTop: 40}}>
                            <Text style={[styles.graphTxt, {marginLeft: 0}]}>월</Text>
                            <Text style={styles.graphTxt}>화</Text>
                            <Text style={styles.graphTxt}>수</Text>
                            <Text style={styles.graphTxt}>목</Text>
                            <Text style={styles.graphTxt}>금</Text>
                            <Text style={styles.graphTxt}>토</Text>
                            <Text style={styles.graphTxt}>일</Text>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('mon1'),
                                    {
                                        bottom: -110,
                                        left: -138,
                                        backgroundColor: '#00d793',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('tue1'),
                                    {
                                        bottom: -110,
                                        left: -96,
                                        backgroundColor: '#00d793',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('wed1'),
                                    {
                                        bottom: -110,
                                        left: -54,
                                        backgroundColor: '#00d793',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('thu1'),
                                    {
                                        bottom: -110,
                                        left: -12,
                                        backgroundColor: '#00d793',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('fri1'),
                                    {
                                        bottom: -110,
                                        left: 30,
                                        backgroundColor: '#00d793',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('sat1'),
                                    {
                                        bottom: -110,
                                        left: 72,
                                        backgroundColor: '#00d793',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('sun1'),
                                    {
                                        bottom: -110,
                                        left: 114,
                                        backgroundColor: '#00d793',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('mon2'),
                                    {
                                        bottom: -110,
                                        left: -123,
                                        backgroundColor: '#f24750',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('tue2'),
                                    {
                                        bottom: -110,
                                        left: -81,
                                        backgroundColor: '#f24750',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('wed2'),
                                    {
                                        bottom: -110,
                                        left: -39,
                                        backgroundColor: '#f24750',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('thu2'),
                                    {
                                        bottom: -110,
                                        left: 3,
                                        backgroundColor: '#f24750',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('fri2'),
                                    {
                                        bottom: -110,
                                        left: 45,
                                        backgroundColor: '#f24750',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('sat2'),
                                    {
                                        bottom: -110,
                                        left: 87,
                                        backgroundColor: '#f24750',
                                    },
                                ]}
                            />

                            <Animated.View
                                style={[
                                    styles.animateBar,
                                    this._getStyle('sun2'),
                                    {
                                        bottom: -110,
                                        left: 129,
                                        backgroundColor: '#f24750',
                                    },
                                ]}
                            />
                        </View>

                        <View style={styles.chartBorder}/>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            marginTop: 7,
                        }}>
                        <Text
                            style={[
                                styles.graphTxt,
                                {marginLeft: 21, fontSize: 11, marginRight: 38},
                            ]}>
                            2019.11.25 ~ 2019.11.30
                        </Text>
                        <View style={styles.positiveCircle}/>
                        <Text style={[styles.graphTxt, {marginLeft: 5, fontSize: 10}]}>
                            Positive
                        </Text>
                        <View style={[styles.negativeCircle, {marginLeft: 10}]}/>
                        <Text style={[styles.graphTxt, {marginLeft: 5, fontSize: 10}]}>
                            Negative
                        </Text>
                    </View>
                </View>
            );
        }

        return (
            <View>
                <StatusBar backgroundColor="blue" barStyle="light-content"/>

                <View style={styles.top}>
                    <Image
                        style={{width: calWidth(198), marginLeft: calWidth(200)}}
                        source={require('../assets/images/main/Oval.png')}
                    />
                    <View style={styles.topView}>
                        <Image
                            style={{width: calWidth(56), marginTop: -calHeight(22)}}
                            resizeMode={'contain'}
                            source={require('../assets/images/main/photo.png')}
                        />

                        <View style={{marginLeft: calWidth(65), marginTop: -calHeight(75)}}>
                            <Text style={styles.topFont}>임현우님의</Text>
                            <Text style={styles.topFont1}>
                                당신의 건강신호에 따른 맞춤 보험시스템
                            </Text>
                        </View>
                    </View>
                    {menu}
                </View>

                {card}

                <View
                    style={{
                        width: 278,
                        height: 48,
                        marginLeft: 48,
                        marginTop: 22,
                        flexDirection: 'row',
                    }}>
                    <View style={{width: 155, flexDirection: 'row'}}>
                        <Image
                            style={{width: 48, height: 48}}
                            source={require('../assets/images/main/icon_up.png')}
                        />

                        <View style={{marginLeft: 16}}>
                            <Text style={styles.pnTxt}>Positive</Text>
                            <Text style={styles.priceTxt}>+{this.state.positive}</Text>
                        </View>
                    </View>

                    <View style={{width: 139, flexDirection: 'row'}}>
                        <Image
                            style={{width: 48, height: 48}}
                            source={require('../assets/images/main/icon_down.png')}
                        />

                        <View style={{marginLeft: 16}}>
                            <Text style={styles.pnTxt}>Negative</Text>
                            <Text style={styles.priceTxt}>-{this.state.negative}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuView: {
        width: 375,
        height: 30,
        marginTop: 20,
        flexDirection: 'row',
    },
    menuStyle: {
        width: '50%',
        marginLeft: 96,
    },
    menuTxt: {
        fontFamily: 'NanumBarunGothic',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 28,
        letterSpacing: -0.23,
        color: '#58b9ff',
    },

    menuTxt1: {
        opacity: 0.44,
        fontFamily: 'NanumBarunGothic',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 28,
        letterSpacing: -0.23,
        color: '#ffffff',
    },

    pnTxt: {
        height: 15,
        fontFamily: 'NanumBarunGothic',
        fontSize: 13,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.16,
        color: '#77869e',
        marginTop: 5,
    },
    priceTxt: {
        width: 58,
        height: 19,
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.4,
        color: '#042c5c',
        marginTop: 4,
    },

    topView: {
        width: calWidth(315),
        height: calHeight(60),
        marginTop: -calHeight(125),
        marginLeft: calWidth(30),
    },

    topFont: {
        opacity: 0.9,
        fontFamily: 'NanumBarunGothic',
        fontSize: 23,
        fontWeight: '300',
        fontStyle: 'normal',
        lineHeight: 28,
        letterSpacing: 0.45,
        color: '#ffffff',
    },
    topFont1: {
        opacity: 0.9,
        fontFamily: 'NanumBarunGothic',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 28,
        letterSpacing: 0.29,
        color: '#ffffff',
    },

    top: {
        width: 375,
        height: 331,
        backgroundColor: '#0047cc',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    bottom: {
        width: calWidth(375),
        height: calHeight(328),
        backgroundColor: '#0047CC',
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
    },
    graphView: {
        width: 327,
        height: 325,
        backgroundColor: 'white',
        marginLeft: calWidth(24),
        marginTop: -calHeight(150),
        borderRadius: 10,

        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 1,
    },

    barStyle: {
        borderColor: 'rgba(119,134,158, .4)',
        borderWidth: 0.5,
        marginBottom: calHeight(10),
        width: calWidth(228),
    },
    timeStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: calHeight(10),
        fontFamily: 'NanumBarunGothic',
        lineHeight: 30,
        color: '#042C5C',
    },

    infoStyle: {
        height: 28,
        opacity: 0.9,
        fontFamily: 'NanumBarunGothic',
        fontSize: 20,
        fontStyle: 'normal',
        lineHeight: 28,
        letterSpacing: -0.32,
        color: '#042c5c',
    },

    circleTxt: {
        width: 101,
        height: 15,
        fontFamily: 'NanumBarunGothic',
        fontSize: 13,
        fontWeight: 'bold',
        fontStyle: 'normal',
        marginTop: -calHeight(15),
        letterSpacing: 0.23,
        color: '#77869e',
    },
    circleTxt2: {
        width: 127,
        height: 35,
        fontFamily: 'NanumBarunGothic',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.45,
        marginTop: calHeight(5),
        color: '#042c5c',
    },

    middleArea: {
        width: 80,
        height: 21,
        borderRadius: 10.5,
        backgroundColor: '#ecf2fb',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: calHeight(5),
    },
    insureName: {
        fontFamily: 'NanumBarunGothic',
        fontSize: 11,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0.19,
        color: '#77869e',
    },

    healthDay: {
        height: 28,
        opacity: 0.9,
        fontFamily: 'NanumBarunGothic',
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 28,
        letterSpacing: -0.32,
        color: '#042c5c',
    },

    animateBar: {
        position: 'absolute',
        width: 10,
        marginRight: 5,
        height: 100,
        borderRadius: 6.5,
    },
    graphTxt: {
        fontFamily: 'NanumBarunGothic',
        fontSize: 13,
        marginLeft: 30,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0.11,
        color: '#77869e',
    },
    chartBorder: {
        width: 287,
        height: 2,
        opacity: 0.39,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#77869e',
        marginTop: 115,
    },
    positiveCircle: {
        width: 8,
        height: 8,
        opacity: 0.7,
        backgroundColor: '#00d793',
        borderRadius: 4,
        marginTop: 1,
    },
    negativeCircle: {
        width: 8,
        height: 8,
        opacity: 0.7,
        backgroundColor: '#f24750',
        borderRadius: 4,
        marginTop: 1,
    },
    percentTxt: {
        fontFamily: 'NanumBarunGothic',
        fontSize: 11,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0.09,
        color: '#77869e',
    },
});
