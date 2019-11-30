import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image, TextInput, StatusBar, TouchableOpacity} from 'react-native';
import {calHeight, calWidth} from '../config/widthAndHeight';
import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import axios from 'axios';


const options = {
    storageOptions: {
        skipBackup: true,
        path: 'images',
        cameraRoll: true,
        waitUntilSaved: true,
    },
};

let outer;


export default class Login extends Component {


    componentDidMount() {
        outer = this;
    }

    getImage = () => {
        ImagePicker.openPicker({
            multiple: true,
        }).then(images => {
            console.log('?', images);


            axios.post('http://192.168.43.224:3434/rekognition/listload', {num: images.length})
                .then(function (response) {
                    let data = response.data;


                    console.log(data);

                });


            this.props.navigation.navigate('Discovering');

        });
    };

    getImageReal = async () => {


        ImagePicker.openPicker({
            multiple: false,
        }).then(images => {

            console.log(images.filename);

            if(images.filename=='IMG_0022.JPG'){
                console.log('deep2');
                outer.props.navigation.navigate('Deep');
            }
            else{
                console.log('deep1');

                outer.props.navigation.navigate('Deep2');
            }



            // ImageResizer.createResizedImage(images.path, 400, 400, 'PNG', 80).then((response) => {
            //
            //     console.log(response);
            //
            //
            //
            //     // const formData = new FormData();
            //     // formData.append('photos', {
            //     //     uri: response.uri,
            //     //     type: 'image/png',
            //     //     name: response.name,
            //     // });
            //     //
            //     // console.log(formData);
            //     //
            //     // axios.post('http://192.168.43.224:3434/rekognition/upload', formData, {
            //     //         headers: {
            //     //             'content-type': 'multipart/form-data',
            //     //         },
            //     //     },
            //     // ).then(function (response) {
            //     //     let data = response.data;
            //     //
            //     //     outer.props.navigation.navigate('Deep');
            //     // });
            // });

        });
    };


    render() {
        return (
            <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content"/>


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

                <TouchableOpacity onPress={() => this.getImage()}>
                    <View style={styles.btnStyle}>
                        <Text style={styles.btnTxt}>실제 분석하기</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.getImageReal()}>
                    <View style={styles.btnStyle2}>
                        <Text style={styles.btnTxt2}>딥러닝 분석 체험하기</Text>
                    </View>
                </TouchableOpacity>


            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({


    logoTxt: {
        fontFamily: 'Montserrat',
        fontSize: 17.5,
        marginTop: 10,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 36,
        letterSpacing: -0.35,
        color: '#323643',
    },

    middleTxt: {
        width: 260,
        height: 72,
        fontFamily: 'NanumBarunGothic',
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0.12,
        textAlign: 'center',
        color: '#77869e',
        marginTop: 50,
    },
    middleTxt1: {
        width: 260,
        height: 72,
        fontFamily: 'NanumBarunGothic',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0.12,
        textAlign: 'center',
        color: 'rgb(4,44,92)',
    },

    btnStyle: {
        width: 297,
        height: 48,
        borderRadius: 6,
        marginTop: 20,
        backgroundColor: '#00d793',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnStyle2: {
        width: 297,
        height: 48,
        borderRadius: 6,
        backgroundColor: '#77869e',
        marginTop: 21,
        alignItems: 'center',
        justifyContent: 'center',
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

    btnTxt2: {
        width: 138,
        height: 19,
        fontFamily: 'NanumBarunGothic',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.4,
        color: '#ffffff',
    },


});
