import React from 'react';
import Inputs from '../../Components/Inputs/Inputs';
import { View,Text,StyleSheet } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Actions } from 'react-native-router-flux';



export default class LoginApp extends React.Component{


    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Plug E</Text>
                <Inputs/>
            </View>


        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
    },
    text:{
        fontWeight: 'bold',
        color:'#1abc9c',
        fontSize:30,

    }
});