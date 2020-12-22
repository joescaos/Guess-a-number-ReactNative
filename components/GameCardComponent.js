import React from 'react';
import { View, StyleSheet } from 'react-native';

const GameCard = props => {
    return(
        <View style={{...styles.gameCard, ...props.style}}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    gameCard: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 9,
        padding: 15,
        borderRadius: 10
    }
});

export default GameCard;