import React from 'react';
import { View,Text,StyleSheet ,ScrollView, TouchableOpacity} from 'react-native';
import PieChart from '../../Components/Charts/Pie';
import Area from '../../Components/Charts/Area';
import { Switch } from 'react-native-switch';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component{

    constructor(){
        super();
        this.apple = "on";
        this.state={
            switchValue:false,
            usage:0,
            rvalue:0

        }
    }



    render(){
        const {navigate} = this.props.navigation;

        return(
            <ScrollView style={styles.container}>
                <Text style={styles.heading}>Home</Text>
                <View>
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                            () => Actions.Dashboard()

                        }>
                        <Text style = {styles.submitButtonText}> Open Dashboard </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                            () => Actions.Setup()

                        }>
                        <Text style = {styles.submitButtonText}> Setup Device </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                            () => Actions.Dashboard()

                        }>
                        <Text style = {styles.submitButtonText}> Log Out </Text>
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