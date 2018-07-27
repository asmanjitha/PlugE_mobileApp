import React from 'react';
import Inputs from '../../Components/Inputs/Inputs';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Actions } from 'react-native-router-flux';



export default class Setup extends React.Component{


    flashDevice(){
        fetch('http://192.168.8.101:3000/api/set/ASD001/flsh', {
            method: 'POST'
        });
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textHead}>Setup new device</Text>
                <Text style = {styles.textTopic}>Follow these steps to setup a new device</Text>
                <Text>1. Un plug the device</Text>
                <Text>2. Create a WiFi hotspot from your smartphone with follwing credentials</Text>
                <Text>(SSID and Password are case sensitive)</Text>
                <Text>  * Network Name (SSID) : PlugE</Text>
                <Text>  * Password : HelloPlugE</Text>
                <Text>3. Now Plug the device to active electric connection</Text>
                <Text>If the green light is steady, You can set your local wifi username and password to the PlugE</Text>

                <View>
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                            () => this.flashDevice()

                        }>
                        <Text style = {styles.submitButtonText}> Check Device Status </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                            () => Actions.UserandPass()

                        }>
                        <Text style = {styles.submitButtonText}> Set User name and Password </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
        width:'100%'
    },
    textHead:{
        fontWeight: 'bold',
        color:'#1abc9c',
        fontSize:30,

    },
    textTopic:{
        fontWeight: 'bold',
        fontSize:20,

    },submitButton: {
        backgroundColor: '#3498db',
        padding: 10,
        margin: 15,
        height: 40,

    },
    submitButtonText:{
        color: 'white',
        textAlign:'center'
    }
});