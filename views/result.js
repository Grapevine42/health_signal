import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image, TextInput, Animated} from 'react-native';
import {calHeight, calWidth} from '../config/widthAndHeight';
import {ScrollView} from 'react-navigation';
import Swiper from 'react-native-swiper';
import axios from 'axios';



let outer;

export default class Result extends Component {

    constructor() {
        super();
        this.state = {
            pImage: 0,
            nImage: 0,
            pInsta: 0,
            nInsta: 0,
            pKT: 0,
            nKT: 0,
            hash: 0,
            pTotal: 0,
            nTotal: 0,
            total: 0
        };
    }


    componentDidMount() {
        outer = this;

        axios.post('http://192.168.43.224:3434/rekognition/alllist')
            .then(function (response) {
                let data = response.data;


                outer.setState({
                    pImage: data[0].pimage,
                    nImage: data[0].nimage,
                    pInstar: data[0].pinstar,
                    nInstar: data[0].ninstar,
                    pKT: data[0].pkftc,
                    nKT: data[0].nkftc,
                    pTotal : data[0].positive,
                    nTotal : data[0].negative,
                    total : data[0].total
                });

            });
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>

                <ScrollView>

                    <View style={styles.blueArea}>

                        <Image
                            style={{width: 45, height: 47, position:'absolute', marginTop: 23, marginLeft: 256}}
                            source={require('../assets/images/discover/imgPlus.png')}
                        />

                        <View style={{marginLeft: 23, marginTop: 23}}>
                            <Text style={styles.blueTxt1}>임현우님의</Text>
                            <Text style={styles.blueTxt2}>총 <Text style={{fontWeight: 'bold'}}>49</Text>건의 분석 결과</Text>
                        </View>



                        <View style={styles.border}/>

                        <View style={{flexDirection: 'row'}}>
                            <Image
                                style={{width: 12, height: 13, marginTop: 17, marginLeft: 24}}
                                source={require('../assets/images/discover/calendar.png')}
                            />

                            <Text style={styles.calTxt}>2019.11.24 ~ 2019.11.30 </Text>
                        </View>

                        <View style={{marginTop: 16, marginLeft: 22, flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                style={{width: 31, height: 30}}
                                source={require('../assets/images/discover/iconSignal.png')}
                            />
                            <Text style={styles.smileTxt}>
                                비교적 건강 😊
                            </Text>

                        </View>

                        <View style={styles.tagArea}>
                            <Text style={styles.tagTitle}>Auto-tagging (나의 수식어)</Text>

                            <Text style={styles.hash}>#운동매니아 #축구 #그린푸드좋아해
                                #아주 가끔은 술을 좋아해</Text>

                        </View>
                    </View>
                    <Text style={styles.middleTitle}>
                        데이터 분석결과
                    </Text>

                    <View style={styles.pnArea}>


                        <View style={styles.circleArea}>
                            <View style={styles.circle}>
                                <Text style={styles.circleTitle}>데이터 총 건수</Text>
                            </View>

                            <Text style={styles.circleNum}>49</Text>
                        </View>

                        <View style={styles.line}/>

                        <View style={styles.circleArea}>
                            <View style={styles.circle}>
                                <Text style={styles.circleTitle}>Positive</Text>
                            </View>

                            <Text style={styles.circleNum}>13</Text>
                        </View>

                        <View style={styles.line}/>


                        <View style={styles.circleArea}>
                            <View style={styles.circle}>
                                <Text style={styles.circleTitle}>Negative</Text>
                            </View>

                            <Text style={styles.circleNum}>4</Text>
                        </View>
                    </View>

                    <View style={{marginTop: 11}}>
                        <View style={styles.whiteBox}>

                            <View style={{width: 205, flexDirection:'row', alignItems:'center'}}>

                                <Image
                                    style={styles.iconStyle}
                                    source={require('../assets/images/discover/photo.png')}
                                />
                                <Text style={styles.iconTxt}>사진첩</Text>
                            </View>
                            <View style={{alignItems:'center', flexDirection:'row'}}>
                                <Image
                                    style={{width:22, height: 22}}
                                    source={require('../assets/images/discover/pIcon.png')}
                                />
                                <Text style={styles.pTxt}>6</Text>
                                <Image
                                    style={{width:22, height: 22, marginLeft:18}}
                                    source={require('../assets/images/discover/nIcon.png')}
                                />
                                <Text style={[styles.pTxt, {color: '#f24750'}]}>2</Text>

                            </View>

                        </View>

                        <View style={styles.whiteBox}>

                            <View style={{width: 205, flexDirection:'row', alignItems:'center'}}>

                                <Image
                                    style={styles.iconStyle}
                                    source={require('../assets/images/discover/insta.png')}
                                />
                                <Text style={styles.iconTxt}>인스타그램</Text>
                            </View>
                            <View style={{alignItems:'center', flexDirection:'row'}}>
                                <Image
                                    style={{width:22, height: 22}}
                                    source={require('../assets/images/discover/pIcon.png')}
                                />
                                <Text style={styles.pTxt}>10</Text>
                                <Image
                                    style={{width:22, height: 22, marginLeft:18}}
                                    source={require('../assets/images/discover/nIcon.png')}
                                />
                                <Text style={[styles.pTxt, {color: '#f24750'}]}>3</Text>

                            </View>

                        </View>

                        <View style={styles.whiteBox}>
                            <View style={{width: 205, flexDirection:'row', alignItems:'center'}}>
                                <Image
                                    style={styles.iconStyle}
                                    source={require('../assets/images/discover/credit.png')}
                                />
                                <Text style={styles.iconTxt}>소비결제</Text>
                            </View>
                            <View style={{alignItems:'center', flexDirection:'row'}}>
                                <Image
                                    style={{width:22, height: 22}}
                                    source={require('../assets/images/discover/pIcon.png')}
                                />
                                <Text style={styles.pTxt}>22</Text>
                                <Image
                                    style={{width:22, height: 22, marginLeft:18}}
                                    source={require('../assets/images/discover/nIcon.png')}
                                />
                                <Text style={[styles.pTxt, {color: '#f24750'}]}>6</Text>

                            </View>
                        </View>

                    </View>

                    <Text style={styles.bottomTitle}>보험상품 추천 및 예상 평균 보험료</Text>

                    <Text style={styles.bottomHash}>#관리자(사무직) #가족력이 있는 #남성{'\n'}
                        #비교적 건강한 생활패턴 #30대 #19840912</Text>

                    <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.expectTitle}>(예상)평균 보험료</Text>

                        <Image
                            style={{width: 27, height: 27, marginLeft: 11}}
                            source={require('../assets/images/discover/iconBasic.png')}
                        />

                        <Text style={[styles.price, {marginLeft: 9}]}>50,000원</Text>

                        <Image
                            style={{width: 27, height: 27, marginLeft: 16}}
                            source={require('../assets/images/discover/iconPremi.png')}
                        />

                        <Text style={[styles.price, {marginLeft: 9}]}>90,000원</Text>

                    </View>

                    <View style={styles.line2}/>

                    <Swiper style={{height: 300}} activeDotColor={'#1bc773'} dotColor={'#D9D3D3'}
                            paginationStyle={{marginBottom: 30}}>

                        <View style={styles.bottomCard}>
                            <Image
                                style={{width: 72, height: 21, marginLeft: 21, marginTop: 14}}
                                source={require('../assets/images/discover/dbLogo.png')}
                            />
                            <Text style={styles.cardTitle}>(무)참좋은간편건강보험1906</Text>


                            <View style={{flexDirection:'row', marginTop: 15}}>

                                <View style={{width: 196, marginLeft: 21}}>
                                    <Text style={styles.titlez}>가입유형</Text>
                                    <Text style={styles.textz}>만기일부환급형, 순수보장형</Text>
                                </View>

                                <View>
                                    <Text style={styles.titlez}>납입주기</Text>
                                    <Text style={styles.textz}>월납/연납</Text>
                                </View>
                            </View>


                            <View style={styles.middleBar}/>

                            <View style={{flexDirection:'row'}}>

                                <View style={{width: 196, marginLeft: 21}}>
                                    <Text style={styles.titlez}>가입나이</Text>
                                    <Text style={styles.textz}>15세~80세 [갱신:30~80세]</Text>
                                </View>

                                <View>
                                    <Text style={styles.titlez}>보험기간</Text>
                                    <Text style={styles.textz}>20년만기</Text>
                                </View>
                            </View>
                        </View>



                        <View style={styles.bottomCard}>
                            <Image
                                style={{width: 72, height: 21, marginLeft: 21, marginTop: 14}}
                                source={require('../assets/images/discover/dbLogo.png')}
                            />
                            <Text style={styles.cardTitle}>(무)I’mOK 암보험</Text>


                            <View style={{flexDirection:'row', marginTop: 15}}>

                                <View style={{width: 196, marginLeft: 21}}>
                                    <Text style={styles.titlez}>가입유형</Text>
                                    <Text style={styles.textz}>-</Text>
                                </View>

                                <View>
                                    <Text style={styles.titlez}>납입주기</Text>
                                    <Text style={styles.textz}>월납/연납</Text>
                                </View>
                            </View>


                            <View style={styles.middleBar}/>

                            <View style={{flexDirection:'row'}}>

                                <View style={{width: 196, marginLeft: 21}}>
                                    <Text style={styles.titlez}>가입나이</Text>
                                    <Text style={styles.textz}>0세~(90-납입기간)세</Text>
                                </View>

                                <View>
                                    <Text style={styles.titlez}>보험기간</Text>
                                    <Text style={styles.textz}>100세만기</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.bottomCard}>
                            <Image
                                style={{width: 72, height: 21, marginLeft: 21, marginTop: 14}}
                                source={require('../assets/images/discover/dbLogo.png')}
                            />
                            <Text style={styles.cardTitle}>실손의료비보험</Text>


                            <View style={{flexDirection:'row', marginTop: 15}}>

                                <View style={{width: 196, marginLeft: 21}}>
                                    <Text style={styles.titlez}>가입유형</Text>
                                    <Text style={styles.textz}>표준형, 선택형(Ⅱ) 순수보장형</Text>
                                </View>

                                <View>
                                    <Text style={styles.titlez}>납입주기</Text>
                                    <Text style={styles.textz}>3,6개월/월,연납</Text>
                                </View>
                            </View>


                            <View style={styles.middleBar}/>

                            <View style={{flexDirection:'row'}}>

                                <View style={{width: 196, marginLeft: 21}}>
                                    <Text style={styles.titlez}>가입나이</Text>
                                    <Text style={styles.textz}>태아~70세(조건별 상이)</Text>
                                </View>

                                <View>
                                    <Text style={styles.titlez}>보험기간</Text>
                                    <Text style={styles.textz}>1년만기</Text>
                                </View>
                            </View>
                        </View>


                    </Swiper>

                </ScrollView>


            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({


    blueArea: {
        width: 327,
        height: 288,
        borderRadius: 12,
        backgroundColor: '#0047cc',
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        marginTop: 5, marginLeft: 24,

    },

    blueTxt1: {
        width: 68,
        height: 27,
        opacity: 0.9,
        fontFamily: 'NanumBarunGothic',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 27,
        letterSpacing: 0.19,
        color: '#ffffff',
    },
    blueTxt2: {
        width: 167,
        height: 28,
        opacity: 0.9,
        fontFamily: 'NanumBarunGothic',
        fontSize: 20,
        fontWeight: '300',
        fontStyle: 'normal',
        lineHeight: 28,
        letterSpacing: 0.39,
        color: '#ffffff',
    },

    border: {
        width: 289,
        height: 2,
        opacity: 0.21,
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
        borderWidth: 1.3,
        borderColor: '#ffffff',
        marginTop: 12,
        marginLeft: 19,
    },
    calTxt: {
        width: 105,
        marginTop: 18,
        marginLeft: 8,
        height: 12,
        opacity: 0.61,
        fontFamily: 'NanumBarunGothic',
        fontSize: 10,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: -0.59,
        color: '#ffffff',
    },
    smileTxt: {
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
    tagArea: {
        width: 296,
        height: 80,
        borderRadius: 12,
        backgroundColor: '#f8f9f9',
        marginTop: 12,
        marginLeft: 16,
        paddingTop: 12,
        paddingLeft: 11,
    },
    tagTitle: {
        width: 158,
        height: 15,
        fontFamily: 'NanumBarunGothic',
        fontSize: 13,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.02,
        color: '#77869e',
    },
    hash: {
        width: 193,
        height: 40,
        fontFamily: 'NanumBarunGothic',
        fontSize: 13,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.1,
        color: '#042c5c',
        marginTop: 5,
    },
    middleTitle: {
        width: 103,
        height: 17,
        fontFamily: 'NanumBarunGothic',
        marginLeft: 24,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 25,
        fontStyle: 'normal',
        letterSpacing: 0.72,
        color: '#77869e',
    },
    pnArea: {
        marginTop: 23,
        flexDirection: 'row',
        marginLeft: 20,
    },
    circle: {
        width: 80,
        height: 21,
        borderRadius: 10.5,
        backgroundColor: '#ecf2fb',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#d3deef',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleTitle: {
        fontFamily: 'NanumBarunGothic',
        fontSize: 11,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.19,
        color: '#77869e',
    },
    circleArea: {
        width: (375 - 40) / 3,
        alignItems: 'center',
    },
    circleNum: {
        height: 35,
        fontFamily: 'NanumBarunGothic',
        fontSize: 28,
        fontStyle: 'normal',
        letterSpacing: 0,
        marginTop: 10,
        color: '#4f607a',
    },
    line: {
        width: 1,
        marginTop: 8,
        height: 45,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#c7c2c2',
    },
    whiteBox: {
        width: 327,
        height: 56,
        marginTop: 9,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        marginLeft: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        width: 40, height: 40,
        marginLeft: 8,
        marginRight: 15,
    },
    iconTxt: {
        height: 19,
        fontFamily: 'NanumBarunGothic',
        fontSize: 15,
        fontWeight: '800',
        fontStyle: 'normal',
        letterSpacing: 0.38,
        color: '#042c5c'
    },
    pTxt: {
        height: 16,
        width: 15,
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0.3,
        color: '#1bc773',
        marginLeft: 8,
    },

    bottomTitle: {
        width: 218,
        height: 17,
        marginTop: 42,
        fontFamily: 'NanumBarunGothic',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.72,
        color: '#77869e',
        marginLeft: 24,
    },
    bottomHash: {
        width: 297,
        height: 60,
        fontFamily: 'NanumBarunGothic',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 30,
        letterSpacing: 0.12,
        color: '#0047cc',
        marginLeft: 26,
        marginTop: 15,
    },
    expectTitle: {
        width: 87,
        height: 12,
        fontFamily: 'NanumBarunGothic',
        fontSize: 11,
        fontWeight: 'bold',
        fontStyle: 'normal',
        marginLeft: 24,
        letterSpacing: 0.53,
        color: '#77869e',
    },
    price: {
        width: 64,
        height: 19,
        fontFamily: 'NanumBarunGothic',
        fontSize: 15,
        fontWeight: '800',
        fontStyle: 'normal',
        letterSpacing: 0.38,
        color: '#042c5c',
    },

    line2: {
        width: 320,
        marginLeft: 55 / 2,
        height: 1,
        borderWidth: 0.5,
        marginTop: 24,
        borderColor: '#bbbbbb',
    },
    bottomCard: {
        width: 327,
        marginTop: 30,
        height: 225,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        marginLeft: 24,
    },
    cardTitle: {
        width: 197,
        height: 20,
        fontFamily: "NanumBarunGothic",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.12,
        color: "#042c5c",
        marginLeft: 19,
        marginTop: 8
    },
    titlez: {
        height: 20,
        fontFamily: "NanumBarunGothic",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.09,
        color: "#77869e"
    },
    textz: {
        height: 20,
        fontFamily: "NanumBarunGothic",
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "#042c5c",
        marginTop: 5
    },

    middleBar: {
        width: 291,
        marginLeft: 21,
        marginTop: 9,
        marginBottom: 9,
        height: 1,
        borderStyle: "solid",
        borderWidth: 0.3,
        borderColor: "#bcbcbc"
    }
});
