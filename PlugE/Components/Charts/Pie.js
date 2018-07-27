import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import Pie from 'react-native-pie'

export default class PieChart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Pie
                    radius={100}
                    innerRadius={60}
                    series={[10, 20, 30, 40]}
                    colors={['#f00', '#0f0', '#00f', '#ff0']} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
})