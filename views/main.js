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
    Animated
} from 'react-native';
import {calHeight, calWidth} from "../config/widthAndHeight";
import {AnimatedGaugeProgress, GaugeProgress} from 'react-native-simple-gauge';


export default class Login extends Component {


    constructor() {
        super();
        this.state = {
            isPage: 1,
            mon: new Animated.Value(0),
            tue: new Animated.Value(0),
            wed: new Animated.Value(0),
            thu: new Animated.Value(0),
            fri: new Animated.Value(0),
            sat: new Animated.Value(0),
            sun: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this._fadeIn();
    }


    _fadeIn() {
        Animated.timing(
            this.state.mon, {
                toValue: 100,
                duration: 1000,
                delay: 200,
            }).start();

        Animated.timing(
            this.state.tue, {
                toValue: 50,
                duration: 1000,
                delay: 200
            }).start();

        Animated.timing(
            this.state.wed, {
                toValue: 130,
                duration: 1000,
                delay: 200
            }).start();
    }

    _getStyle(data) {

        switch (data) {
            case 'mon':
                return {height: this.state.mon};
            case 'tue':
                return {height: this.state.tue};
            case 'wed':
                return {height: this.state.wed};
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
                            <View style={{
                                width: 65,
                                height: calHeight(2),
                                backgroundColor: '#58b9ff'
                            }}/>
                        </TouchableOpacity>

                    </View>

                    <View style={{marginLeft: 55}}>

                        <TouchableOpacity onPress={() => this.setState({isPage: 1})}>

                            <Text style={styles.menuTxt1}>건강 그래프</Text>
                            <View style={{
                                width: 65,
                                height: calHeight(2),
                            }}/>

                        </TouchableOpacity>
                    </View>

                </View>

            );
            card = (

                <View style={styles.graphView}>
                    <Text style={styles.timeStyle}>2019.11.25 ~ 2019.11.30</Text>
                    <View style={styles.barStyle}/>
                    <Text style={styles.infoStyle}>당신이<Text style={{fontWeight: 'bold'}}> 절약한 보험비는?</Text></Text>


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
                        style={{marginTop: calHeight(10)}}/>

                    <View style={{marginTop: -calHeight(210), alignItems: 'center'}}>

                        <Image
                            style={{width: calWidth(120)}}
                            resizeMode={'contain'}
                            source={require('../assets/images/main/money.png')}
                        />

                        <Text style={styles.circleTxt}>할인받은 총 보험비</Text>
                        <Text style={styles.circleTxt2}>+3,500원</Text>

                        <View style={styles.middleArea}>
                            <Text style={styles.insureName}>
                                i'm OK암보험
                            </Text>
                        </View>
                    </View>
                </View>
            )
        } else {

            menu = (
                <View style={styles.menuView}>
                    <View style={{marginLeft: 96}}>

                        <TouchableOpacity onPress={() => this.setState({isPage: 0})}>
                            <Text style={styles.menuTxt1}>보험비 현황</Text>
                            <View style={{
                                width: 65,
                                height: calHeight(2),
                            }}/>
                        </TouchableOpacity>

                    </View>

                    <View style={{marginLeft: 55}}>

                        <TouchableOpacity onPress={() => this.setState({isPage: 1})}>

                            <Text style={styles.menuTxt}>건강 그래프</Text>
                            <View style={{
                                width: 65,
                                height: calHeight(2),
                                backgroundColor: '#58b9ff'

                            }}/>

                        </TouchableOpacity>
                    </View>

                </View>

            );
            card = (

                <View style={styles.graphView}>
                    <Text style={styles.timeStyle}>이번주 당신의 건강 패턴</Text>
                    <View style={styles.barStyle}/>

                    <Text style={styles.healthDay}>건강한 한 주를 보내셨군요 💪</Text>

                    <View style={{flexDirection: 'row'}}>

                        {/*<Animated.View style={[styles.bar, this._getStyle('mon')]}/>*/}
                        {/*<Animated.View style={[styles.bar, this._getStyle('tue')]}/>*/}
                        {/*<Animated.View style={[styles.bar, this._getStyle('wed')]}/>*/}

                        <View style={[styles.bar, {height: 30}]}></View>
                        <View style={[styles.bar, {height: 130}]}></View>
                        <View style={[styles.bar, {height: 50}]}></View>


                    </View>

                </View>

            )


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
                            <Text style={styles.topFont1}>당신의 건강신호에 따른 맞춤 보험시스템</Text>
                        </View>
                    </View>
                    {menu}
                </View>


                {card}

                <View style={{width: 278, height: 48, marginLeft: 48, marginTop: 22, flexDirection: 'row'}}>
                    <View style={{width: 155, flexDirection: 'row'}}>
                        <Image
                            style={{width: 48, height: 48}}
                            source={require('../assets/images/main/icon_up.png')}
                        />

                        <View style={{marginLeft: 16}}>
                            <Text style={styles.pnTxt}>
                                Positive

                            </Text>
                            <Text style={styles.priceTxt}>
                                +4,700
                            </Text>

                        </View>
                    </View>


                    <View style={{width: 139, flexDirection: 'row'}}>
                        <Image
                            style={{width: 48, height: 48}}
                            source={require('../assets/images/main/icon_down.png')}
                        />

                        <View style={{marginLeft: 16}}>
                            <Text style={styles.pnTxt}>
                                Negative

                            </Text>
                            <Text style={styles.priceTxt}>
                                +4,700
                            </Text>

                        </View>
                    </View>


                </View>


            </View>

        );
    }
}


const styles = StyleSheet.create({

    menuView: {
        width: 375, height: 30, marginTop: 20, flexDirection: 'row'
    },
    menuStyle: {
        width: '50%',
        marginLeft: 96
    },
    menuTxt: {
        fontFamily: "NanumBarunGothic",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: -0.23,
        color: "#58b9ff"
    },

    menuTxt1: {
        opacity: 0.44,
        fontFamily: "NanumBarunGothic",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: -0.23,
        color: "#ffffff"
    },


    pnTxt: {
        height: 15,
        fontFamily: "NanumBarunGothic",
        fontSize: 13,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.16,
        color: "#77869e",
        marginTop: 5
    },
    priceTxt: {
        width: 58,
        height: 19,
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.4,
        color: "#042c5c",
        marginTop: 4
    },

    topView: {
        width: calWidth(315),
        height: calHeight(60),
        marginTop: -calHeight(125),
        marginLeft: calWidth(30)
    },

    topFont: {
        fontSize: 23,
        fontFamily: 'NanumBarunGothicLight',
        color: 'white'
    },
    topFont1: {
        fontSize: 15,
        fontFamily: 'NanumBarunGothic',
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 30
    },


    top: {
        width: 375,
        height: 331,
        backgroundColor: "#0047cc",
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
        alignItems: 'center',
        marginLeft: calWidth(24),
        marginTop: -calHeight(150),
        borderRadius: 10,

        shadowColor: "rgba(0, 0, 0, 0.08)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20,
        shadowOpacity: 1,


    },

    barStyle: {
        borderColor: 'rgba(119,134,158, .4)',
        borderWidth: 0.5,
        marginBottom: calHeight(10),
        width: calWidth(228)
    },
    timeStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: calHeight(10),
        fontFamily: 'NanumBarunGothic',
        lineHeight: 30,
        color: '#042C5C'

    },

    infoStyle: {
        width: 197,
        height: 28,
        opacity: 0.9,
        fontFamily: "NanumBarunGothic",
        fontSize: 20,
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: -0.32,
        color: "#042c5c"
    },


    circleTxt: {
        width: 101,
        height: 15,
        fontFamily: "NanumBarunGothic",
        fontSize: 13,
        fontWeight: "bold",
        fontStyle: "normal",
        marginTop: -calHeight(15),
        letterSpacing: 0.23,
        color: "#77869e"
    },
    circleTxt2: {
        width: 127,
        height: 35,
        fontFamily: "NanumBarunGothic",
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.45,
        marginTop: calHeight(5),
        color: "#042c5c"
    },

    middleArea: {
        width: 80,
        height: 21,
        borderRadius: 10.5,
        backgroundColor: "#ecf2fb",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: calHeight(5)
    },
    insureName: {
        fontFamily: "NanumBarunGothic",
        fontSize: 11,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.19,
        color: "#77869e"
    },

    healthDay: {
        width: 232,
        height: 28,
        opacity: 0.9,
        fontFamily: "NanumBarunGothic",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: -0.32,
        color: "#042c5c"
    },
    bar: {
        borderRadius: 6.5,
        width: 10,
        marginRight: 5,
        backgroundColor: '#FCBD24'
    },
});
