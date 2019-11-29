import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {calHeight, calWidth} from '../config/widthAndHeight';
import {ScrollView} from 'react-navigation';
import RNPickerSelect from 'react-native-picker-select';
import ActionSheet from 'react-native-actionsheet';


export default class Login extends Component {

    showActionSheet = () => {
        this.ActionSheet.show();
    };

    constructor() {
        super();
        this.state = {
            gender: 2,
            job: 0,
            family: 2,
            smoke: 2,
        };
    }


    toggle = (data, init) => {

        if (data === 'gender') {
            this.setState({gender: init});
        }


        if (data === 'family') {
            this.setState({family: init});
        }


        if (data === 'smoke') {
            this.setState({smoke: init});
        }
    };


    render() {

        const pickerStyle = {
            inputIOS: {
                color: 'white',
                paddingLeft: 13,
            },
        };

        let arr = [
            '관리자(사무직)',
            '군인',
            '판매직',
            '농림어업',
            '장치기계조작',
            '전문가',
            '주부학생',
        ];


        return (
            <SafeAreaView style={{flex: 1}}>
                <ScrollView>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                        <Image source={require('../assets/images/survey/imgSurvey.png')}
                               style={{
                                   width: 222,
                                   height: 216,
                               }}/>

                        <Text style={styles.txt}>
                            <Text style={{fontWeight: 'bold', color: '#4f607a'}}>기본적인 설문 입력이 필요합니다.{'\n'}</Text>
                            입력된 기본적인 정보는 Health Signal의
                            분석시스템에 활용됩니다.
                        </Text>
                    </View>

                    <View style={{
                        borderRadius: 25,
                        backgroundColor: '#f5f7f9',
                        height: 735,
                    }}>

                        <View style={{marginLeft: 33}}>

                            <Text style={[styles.title, {marginTop: 43, marginBottom: 7}]}>이름</Text>

                            <View style={[styles.inputBox, {justifyContent: 'center'}]}>
                                <TextInput style={styles.inputStyle} placeholder={'홍길동'}/>
                            </View>

                            <Text style={[styles.title, {marginTop: 20, marginBottom: 7}]}>성별</Text>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => this.toggle('gender', 0)}>
                                    <Image
                                        source={this.state.gender === 0 ? require('../assets/images/survey/OK.png') : require('../assets/images/survey/NO.png')}
                                        style={styles.checkBox}/>
                                </TouchableOpacity>

                                <Text style={[styles.title, {marginLeft: 10, marginRight: 60}]}>여자</Text>


                                <TouchableOpacity onPress={() => this.toggle('gender', 1)}>
                                    <Image
                                        source={this.state.gender === 1 ? require('../assets/images/survey/OK.png') : require('../assets/images/survey/NO.png')}
                                        style={styles.checkBox}/>
                                </TouchableOpacity>

                                <Text style={[styles.title, {marginLeft: 10}]}>남자</Text>
                            </View>

                            <Text style={[styles.title, {marginTop: 20, marginBottom: 7}]}>생년월일</Text>

                            <View style={[styles.inputBox, {justifyContent: 'center'}]}>
                                <TextInput style={styles.inputStyle} placeholder={'ex) 19840912'}/>
                            </View>

                            <View style={{marginTop: 20, flexDirection: 'row'}}>
                                <View>
                                    <Text style={[styles.title, {marginBottom: 7}]}>키</Text>
                                    <View style={[styles.inputBox, {justifyContent: 'center', width: 138}]}>
                                        <TextInput style={styles.inputStyle} placeholder={'ex) 175'}/>
                                    </View>
                                </View>

                                <View style={{marginLeft: 32}}>
                                    <Text style={[styles.title, {marginBottom: 7}]}>몸무게</Text>
                                    <View style={[styles.inputBox, {justifyContent: 'center', width: 138}]}>
                                        <TextInput style={styles.inputStyle} placeholder={'ex) 65'}/>
                                    </View>
                                </View>


                            </View>


                            <Text style={[styles.title, {marginTop: 20, marginBottom: 7}]}>직업군</Text>

                            <TouchableOpacity onPress={() => this.showActionSheet()}>
                                <View style={[styles.inputBox, {justifyContent: 'center'}]}>


                                    {this.state.job === 0 ?

                                        <View style={{flexDirection: 'row'}}>
                                            <Text onPress={this.showActionSheet}
                                                  style={{
                                                      height: 17,
                                                      fontFamily: 'NanumBarunGothic',
                                                      marginLeft: 13,
                                                      fontSize: 15,
                                                      fontWeight: 'normal',
                                                      fontStyle: 'normal',
                                                      letterSpacing: 0.35,
                                                      color: '#979797',
                                                  }}>직업군을 선택하세요.</Text>

                                            <Image
                                                source={require('../assets/images/survey/arrow.png')}
                                                style={{width: 33 / 2, height: 36 / 2, marginLeft: 130}}/>
                                        </View>
                                        :
                                        <Text onPress={this.showActionSheet}
                                              style={styles.inputStyle}>{this.state.job}</Text>

                                    }
                                    <ActionSheet
                                        ref={o => this.ActionSheet = o}
                                        title={'직업군을 선택하세요.'}

                                        options={arr}
                                        onPress={(index) => {
                                            this.setState({job: arr[index]});
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>


                        </View>


                        <View style={styles.line}/>

                        <View style={{marginLeft: 33}}>
                            <Text style={[styles.title, {marginTop: 25, marginBottom: 7}]}>가족력 질환 여부</Text>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => this.toggle('family', 0)}>
                                    <Image
                                        source={this.state.family === 0 ? require('../assets/images/survey/OK.png') : require('../assets/images/survey/NO.png')}
                                        style={styles.checkBox}/>
                                </TouchableOpacity>

                                <Text style={[styles.title, {marginLeft: 10, marginRight: 60}]}>예(있음)</Text>


                                <TouchableOpacity onPress={() => this.toggle('family', 1)}>
                                    <Image
                                        source={this.state.family === 1 ? require('../assets/images/survey/OK.png') : require('../assets/images/survey/NO.png')}
                                        style={styles.checkBox}/>
                                </TouchableOpacity>

                                <Text style={[styles.title, {marginLeft: 10}]}>아니오(없음)</Text>
                            </View>


                            <Text style={[styles.title, {marginTop: 35, marginBottom: 7}]}>흡연 여부</Text>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => this.toggle('smoke', 0)}>
                                    <Image
                                        source={this.state.smoke === 0 ? require('../assets/images/survey/OK.png') : require('../assets/images/survey/NO.png')}
                                        style={styles.checkBox}/>
                                </TouchableOpacity>

                                <Text style={[styles.title, {marginLeft: 10, marginRight: 60}]}>예(있음)</Text>


                                <TouchableOpacity onPress={() => this.toggle('smoke', 1)}>
                                    <Image
                                        source={this.state.smoke === 1 ? require('../assets/images/survey/OK.png') : require('../assets/images/survey/NO.png')}
                                        style={styles.checkBox}/>
                                </TouchableOpacity>

                                <Text style={[styles.title, {marginLeft: 10}]}>아니오(없음)</Text>
                            </View>

                        </View>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
                            <View style={styles.nextNext}>
                                <Text style={styles.finish}>완료</Text>
                            </View>
                        </TouchableOpacity>


                    </View>


                </ScrollView>


            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({


    no: {
        width: 24,
        height: 24,
        borderRadius: 8.5,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: '#d9d3d3',
    },
    txt: {
        width: 252,
        marginTop: 10,
        height: 96,
        fontFamily: 'NanumBarunGothic',
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0.12,
        textAlign: 'center',
        color: '#77869e',
    },

    title: {
        height: 16,
        fontFamily: 'NanumBarunGothic',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0,
        color: '#243b6b',
    },
    inputBox: {
        width: 308,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: '#d9d3d3',
    },
    inputStyle: {
        height: 17,
        fontFamily: 'NanumBarunGothic',
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0.35,
        color: '#292929',
        marginLeft: 13,
    },
    line: {
        width: 334,
        height: 1,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#d6d6d6',
        marginTop: 28,
        marginLeft: 20,
    },
    checkBox: {
        width: 24,
        height: 24,
    },
    picker: {
        paddingLeft: 50,
    },

    nextNext: {
        width: 297,
        height: 48,
        borderRadius: 6,
        backgroundColor: '#77869e',
        marginTop: 47,
        marginLeft: 39,
        justifyContent: 'center',
        alignItems: 'center',
    },
    finish: {
        width: 29,
        height: 19,
        fontFamily: 'NanumBarunGothic',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.4,
        color: '#ffffff',
    },

});
