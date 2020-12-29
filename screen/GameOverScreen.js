import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
        <Text style={styles.textMain}>El juego terminó!</Text>
        <Text style={styles.textSec}>Le tomó al celular {props.numberOfRounds} rondas para adivinar</Text>
        <Text style={styles.textSec}>El número que pusiste era el: {props.userNumber}</Text>
        <View style={styles.btn}>
            <Button title='Jugar de nuevo' onPress={props.onRestart} color={Colors.primary}/>
        </View>
        
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    textMain: {
        fontSize: 40,
        color: Colors.primary
    },
    textSec: {
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'center'
    },
    btn: {
        marginTop: 10,
        minWidth: '80%'
    }
    
});

export default GameOverScreen;
