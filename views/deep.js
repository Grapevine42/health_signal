import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image, TextInput, Picker} from 'react-native';
import {calHeight, calWidth} from '../config/widthAndHeight';

export default class Login extends Component {

    render() {

        return (
            <SafeAreaView style={{flex: 1}}>
                <View>

                    <Picker
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>

                </View>

            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({



    rectangle: {
        borderWidth: 1,
        borderColor: 'red',
        position: 'absolute',
    },

});
