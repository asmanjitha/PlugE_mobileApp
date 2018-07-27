import React from 'react';
import Inputs from '../../Components/Inputs/Inputs';
import { View,Text,StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PasswordInputText from 'react-native-hide-show-password-input';



export default class UserandPass extends React.Component{

    state = {
        ssid: '',
        password: '',
        modalVisible: false
    };
    handleSSID = (text) => {
        this.setState({ ssid: text })
    };
    handlePassword = (text) => {
        this.setState({ password: text })
    };
    loginWiFi = () => {
        this.sendSSID(this.state.ssid);
        setTimeout(() => {this.sendPass(this.state.password)}, 2000);
        setTimeout(() => {this.getData()}, 4000);
        // setTimeout(() => {this.sendSSID(this.state.ssid)}, 155000);
        // setTimeout(() => {this.sendPass(this.state.password)}, 20000);
        setTimeout(() => {this.loginDevice(this.state.password)}, 6000);

    };
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    };

    sendSSID(ssid) {
        fetch('http://192.168.8.101:3000/api/set/ASD001/user:'+String(ssid), {
            method: 'POST'
        });
    };
    sendPass(pass) {
        fetch('http://192.168.8.101:3000/api/set/ASD001/pass:'+String(pass), {
            method: 'POST'
        });
    };
    getData(){
        fetch('http://192.168.8.101:3000/api/set/ASD001/getd', {
            method: 'POST'
        });
    };

    loginDevice(){
        fetch('http://192.168.8.101:3000/api/set/ASD001/logn', {
            method: 'POST'
        });
    };




    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style = {styles.container}>

                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "WiFi User name (SSID)"
                           placeholderTextColor = "#3498db"
                           autoCapitalize = "none"
                           onChangeText = {this.handleSSID}/>


                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "WiFi Password"
                           placeholderTextColor = "#3498db"
                           secureTextEntry = {false}
                           autoCapitalize = "none"
                           onChangeText = {this.handlePassword}/>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text style={styles.textHeadSetup}>!!! Are You Sure !!!</Text>
                            <Text style={styles.textTopic}>Username and Password will be saved in the device</Text>
                            <Text style={styles.textNormal}>WiFi User name (SSID): {this.state.ssid}</Text>
                            <Text style={styles.textNormal}>WiFi Password: {this.state.password}</Text>

                            <TouchableOpacity
                                style = {styles.submitButton}
                                onPress={() => {
                                    this.loginWiFi();
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style={styles.submitButtonText}>Save User Name and Password</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style = {styles.cancelButton}
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style = {styles.submitButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>


                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.setModalVisible(true)

                    }>
                    <Text style = {styles.submitButtonText}> Login WiFi </Text>
                </TouchableOpacity>
            </View>


        );
    }

}
const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        width:'100%',
        alignItems:'center'
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#3498db',
        borderWidth: 1,
        width:'90%'


    },
    submitButton: {
        backgroundColor: '#3498db',
        padding: 10,
        margin: 15,
        height: 40,
    },
    cancelButton: {
        backgroundColor: '#db1f33',
        padding: 10,
        margin: 15,
        height: 40,

    },
    submitButtonText:{
        color: 'white',
        textAlign:'center'
    },
    textHeadSetup:{
        fontWeight: 'bold',
        color:'#dd0047',
        fontSize:30,
        textAlign:'center'
    },
    textTopic:{
        fontWeight: 'bold',
        fontSize:20,
        textAlign:'center',
    },
    textNormal:{
        fontSize:20,
        textAlign:'center'

    }

});