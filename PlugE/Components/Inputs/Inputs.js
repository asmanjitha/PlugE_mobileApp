import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux';

class Inputs extends Component {

    state = {
        email: '',
        password: ''
    };
    handleEmail = (text) => {
        this.setState({email: text})
    }
    handlePassword = (text) => {
        this.setState({password: text})
    }
    login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Email"
                           placeholderTextColor="#3498db"
                           autoCapitalize="none"
                           onChangeText={this.handleEmail}/>

                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Password"
                           placeholderTextColor="#3498db"
                           secureTextEntry={true}
                           autoCapitalize="none"
                           onChangeText={this.handlePassword}/>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={
                        () => Actions.Home()

                    }>
                    <Text style={styles.submitButtonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={
                        () => Actions.Home()

                    }>
                    <Text style={styles.submitButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        width: '85%'
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        margin: 15,
        marginBottom: 5,
        padding: 10,
        color: '#000',
        textAlign: 'center'
    },
    submitButton: {
        backgroundColor: '#3498db',
        padding: 10,
        margin: 15,
        marginBottom: 5,
        height: 40
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        margin: 15,
        paddingVertical: 15
    },
})