import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = props => {
    return(
        <View style={styles.numberContainer}>
            <Text>Número elegido</Text>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    numberContainer: {
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      number: {
        color: Colors.primary,
        fontSize: 42
      }
})

export default NumberContainer;