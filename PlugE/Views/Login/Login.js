import React from 'react';
import Inputs from '../../Components/Inputs/Inputs';
import {StyleSheet, KeyboardAvoidingView, View, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class LoginApp extends React.Component {


    render() {
        const {navigate} = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                {/*<Text style={styles.text}>Plug E</Text>*/}
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('../../Components/Images/logo.jpg')} />
                </View>

                <View style={styles.container}>
                    <Inputs/>
                </View>

            </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    loginContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        padding: 0,
        margin: 0
    },
    text: {
        fontWeight: 'bold',
        color: '#1abc9c',
        fontSize: 30,

    },
    logo: {
        resizeMode: 'center',
        width: '80%'
    }
});