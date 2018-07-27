import React from 'react';
import { View,Text,StyleSheet ,ScrollView, TouchableOpacity} from 'react-native';
import PieChart from '../../Components/Charts/Pie';
import Area from '../../Components/Charts/Area';
import { Switch } from 'react-native-switch';
import { Actions } from 'react-native-router-flux';

export default class Dashboard extends React.Component{

    constructor(){
        super();
        this.apple = "on";
        this.state={
            switchValue:false,
            usage:0,
            rvalue:0

        }
    }

    onSwitchValueChange = (value) => {
        this.setState({
            switchValue:value
        });
        alert("Switching Plug-E ASD001" );
        if (value === true){
            this.handleOn();
        }else if (value === false){
            this.handleOff();
        }
    };

    handleOn() {
        fetch('http://192.168.8.101:3000/api/switch/ASD001/ON', {
            method: 'POST'
        });
    }
    handleOff() {
        fetch('http://192.168.8.101:3000/api/switch/ASD001/OFF', {
            method: 'POST'
        });
    }

    flashDevice(){
        fetch('http://192.168.8.101:3000/api/set/ASD001/flsh', {
            method: 'POST'
        });
    };


    getUsage() {
        return fetch('http://192.168.8.101:3000/api/usage/ASD001/2018/2/11')
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.usage === null){
                    this.state.usage = 0;
                }else{
                    this.state.usage = responseJson.usage;
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }
    getValue() {
        return fetch('http://192.168.8.101:3000/api/usage/ASD001/2018/2/11')
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.usage === null){
                    this.state.usage = 0;
                }else{
                    this.state.rvalue = responseJson.usage*2.5;
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }



    render(){
        const {navigate} = this.props.navigation;
        this.getValue();
        this.getUsage();

        return(
            <ScrollView style={styles.container}>
                <Text style={styles.heading}>Dashboard</Text>
                <View style={styles.headboard} >
                    <View style={{flex:1,width:'50%'}}>
                        <Text style={{fontSize:25,textAlign:'center'}} >Device</Text>
                        <Text style={{fontSize:25, fontWeight: 'bold',textAlign:'center'}}>ASD001</Text>
                    </View>
                    <View style={{width:'50%',alignItems:'center'}}>
                        <Text style={{fontSize:20,textAlign:'center'}} >Switch states</Text>
                        <Switch
                            value = {this.state.switchValue}
                            onValueChange = {this.onSwitchValueChange}
                        />
                    </View>
                </View>

                <View style={{flex:1}}>
                    <Text style={{fontSize:40,textAlign:'center'}}>Usage</Text>
                    <Text style={{fontSize:30,textAlign:'center'}}>{this.state.usage.toString().substring(0,8)} kWh</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize:40,textAlign:'center'}}>Usage(LKR)</Text>
                    <Text style={{fontSize:30,textAlign:'center'}}>LKR {this.state.rvalue.toString().substring(0,8)}</Text>
                </View>

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
                        <Text style = {styles.submitButtonText}> Change Username And Password </Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>


        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff'
    },
    areaChart:{
        width:200,
        height:200
    },
    heading:{
        fontWeight: 'bold',
        color:'#34495e',
        fontSize:40,
        textAlign:'center'
    },
    headboard:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#81ecec',
        height:75

    },submitButton: {
        backgroundColor: '#db38c5',
        padding: 10,
        margin: 15,
        height: 40,

    },
    submitButtonText:{
        color: 'white',
        textAlign:'center'
    }

});