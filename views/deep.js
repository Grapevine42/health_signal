import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image, TextInput, Picker, TouchableOpacity, Animated} from 'react-native';
import {calHeight, calWidth} from '../config/widthAndHeight';
import {ScrollView} from 'react-navigation';

export default class Login extends Component {


    constructor() {
        super();
        this.state = {
            progressBar: 0,
            value1: new Animated.Value(1),
            value2: new Animated.Value(0),
        };
    }


    componentDidMount() {
        setTimeout(() => {

            Animated.timing(this.state.value1, {
                toValue: 0,
                delay: 200,
                duration: 2000,
            }).start();

            Animated.timing(this.state.value2, {
                toValue: 1,
                delay: 20,
                duration: 10,
            }).start();
        }, 1300);
    }

    _getStyle(num) {
        switch (num) {
            case 1:
                return {
                    width: 375, height: 250, position: 'absolute', opacity: this.state.value1,
                };
            case 2:
                return {
                    width: 375, height: 250, position: 'absolute', opacity: this.state.value2,
                };
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <ScrollView>

                    <Animated.Image
                        style={this._getStyle(1)}
                        source={require('../assets/images/deep/rectOver.png')}
                    />

                    <Animated.Image
                        style={this._getStyle(2)}
                        source={require('../assets/images/deep/rectImg.png')}
                    />

                    <Text style={styles.title}>분석결과</Text>

                    <View style={styles.rectangle}>

                        <View style={styles.miniCircle}>
                            <Text style={styles.circleTxt}>나의 수식어</Text>
                        </View>

                        <Text style={styles.hashTag}>#운동을 좋아하는, #축구를 즐기는
                            #사람들과 어울리기 좋아하는</Text>
                    </View>

                    <View style={{marginTop: 30}}>


                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            borderBottomWidth: 1,
                            marginRight: 24,
                            borderColor: '#bcbcbc',
                            paddingBottom: 5,
                        }}>
                            <Text style={styles.mainTxt}>Human</Text>
                            <Text style={styles.boldTxt}>99.7%</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            borderBottomWidth: 1,
                            marginRight: 24,
                            borderColor: '#bcbcbc',
                            paddingBottom: 5,
                        }}>
                            <Text style={styles.mainTxt}>Person</Text>
                            <Text style={styles.boldTxt}>99.7%</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            borderBottomWidth: 1,
                            marginRight: 24,
                            borderColor: '#bcbcbc',
                            paddingBottom: 5,
                        }}>
                            <Text style={styles.mainTxt}>Soccer</Text>
                            <Text style={styles.boldTxt}>98%</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            borderBottomWidth: 1,
                            marginRight: 24,
                            borderColor: '#bcbcbc',
                            paddingBottom: 5,
                        }}>
                            <Text style={styles.mainTxt}>Team Sport</Text>
                            <Text style={styles.boldTxt}>98%</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            borderBottomWidth: 1,
                            marginRight: 24,
                            borderColor: '#bcbcbc',
                            paddingBottom: 5,
                        }}>
                            <Text style={styles.mainTxt}>Team</Text>
                            <Text style={styles.boldTxt}>98%</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            borderBottomWidth: 1,
                            marginRight: 24,
                            borderColor: '#bcbcbc',
                            paddingBottom: 5,
                        }}>
                            <Text style={styles.mainTxt}>Soccer Ball</Text>
                            <Text style={styles.boldTxt}>98%</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            borderBottomWidth: 1,
                            marginRight: 24,
                            borderColor: '#bcbcbc',
                            paddingBottom: 5,
                        }}>
                            <Text style={styles.mainTxt}>People</Text>
                            <Text style={styles.boldTxt}>98%</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            borderBottomWidth: 1,
                            marginRight: 24,
                            borderColor: '#bcbcbc',
                            paddingBottom: 5,
                        }}>
                            <Text style={styles.mainTxt}>Ball</Text>
                            <Text style={styles.boldTxt}>98%</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            borderBottomWidth: 1,
                            marginRight: 24,
                            borderColor: '#bcbcbc',
                            paddingBottom: 5,
                        }}>
                            <Text style={styles.mainTxt}>Football</Text>
                            <Text style={styles.boldTxt}>98%</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            borderBottomWidth: 1,
                            marginRight: 24,
                            borderColor: '#bcbcbc',
                            paddingBottom: 5,
                        }}>
                            <Text style={styles.mainTxt}>Sports</Text>
                            <Text style={styles.boldTxt}>98%</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            borderBottomWidth: 1,
                            marginRight: 24,
                            borderColor: '#bcbcbc',
                            paddingBottom: 5,
                        }}>
                            <Text style={styles.mainTxt}>Sport</Text>
                            <Text style={styles.boldTxt}>98%</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 24,
                            borderBottomWidth: 1,
                            marginRight: 24,
                            borderColor: '#bcbcbc',
                            paddingBottom: 5,
                        }}>
                            <Text style={styles.mainTxt}>Field</Text>
                            <Text style={styles.boldTxt}>65.1%</Text>
                        </View>
                    </View>


                    <Text style={styles.middleTxt}>
                        Health Signal 서비스는 딥러닝 분석을 통해{'\n'}
                        추출된 결과를 통해 <Text style={{color: '#042c5c', fontWeight: 'bold'}}>사용자의 특성을 자동태깅</Text>을 합니다.{'\n'}
                        학습되는 데이터가 많을수록 <Text style={{color: '#042c5c', fontWeight: 'bold'}}>정교화된 레포팅</Text>이 제공됩니다.
                    </Text>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Discovering')}>
                        <View style={styles.btnStyle}>
                            <Text style={styles.btnTxt}>실제 분석하기</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({


    rectangle: {
        width: 325,
        height: 105,
        marginTop: 15,
        borderRadius: 12,
        backgroundColor: '#f7f9ff',
        borderStyle: 'solid',
        borderWidth: 1.5,
        marginLeft: 25,
        borderColor: '#eaecf4',
    },

    circle: {
        width: 325,
        height: 105,
        borderRadius: 12,
        backgroundColor: '#f7f9ff',
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: '#eaecf4',
    },
    miniCircle: {
        width: 80,
        height: 21,
        borderRadius: 10.5,
        backgroundColor: '#0047cc',
        marginTop: 16,
        marginLeft: 18,
        justifyContent: 'center', alignItems: 'center',
    },
    circleTxt: {
        width: 53,
        height: 12,
        fontFamily: 'NanumBarunGothic',
        fontSize: 11,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.19,
        color: '#ffffff',
    },
    hashTag: {
        width: 223,
        height: 52,
        fontFamily: 'NanumBarunGothic',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 26,
        letterSpacing: 0.12,
        color: '#0047cc',
        marginLeft: 19,
        marginTop: 8,
    },
    title: {
        width: 57,
        height: 17,
        marginLeft: 24,
        fontFamily: 'NanumBarunGothic',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.72,
        color: '#77869e',
        marginTop: 268,
    },
    middleTxt: {
        width: 324,
        marginLeft: 25,
        marginTop: 30,
        height: 69,
        fontFamily: 'NanumBarunGothic',
        fontSize: 13.5,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 23,
        letterSpacing: 0.1,
        color: '#77869e',
    },
    btnStyle: {
        width: 297,
        height: 48,
        borderRadius: 6,
        marginTop: 30,
        backgroundColor: '#00d793',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 39,
        marginBottom: 50,
    },
    btnTxt: {
        height: 19,
        fontFamily: 'NanumBarunGothic',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.4,
        color: '#ffffff',
    },


    mainTxt: {
        width: 280,
        height: 20,
        fontFamily: 'NanumBarunGothic',
        fontSize: 13,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.1,
        color: '#77869e',
        marginTop: 5,
        marginLeft: 5,
    },


    boldTxt: {
        width: 39,
        height: 20,
        marginTop: 5,
        fontFamily: 'NanumBarunGothic',
        fontSize: 13,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.1,
        color: '#042c5c',
    },

});
