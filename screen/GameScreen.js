import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import GameCard from "../components/GameCardComponent";
import Colors from '../constants/colors';


const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const {userChoice, onGameOver } = props

  useEffect(() => {
      if(currentGuess === userChoice){
        onGameOver(rounds)
      }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "bajar" && currentGuess < props.userChoice) ||
      (direction === "subir" && currentGuess > props.userChoice)
    ) {
      Alert.alert("No mientas!", "Opción equivocada...", [
        { text: "Lo siento", style: "cancel" },
      ]);
    return;

    }

    if (direction == "bajar") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Intento del Oponente </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <GameCard style={styles.buttonContainer}>
        <Button title="Subir" onPress={nextGuessHandler.bind(this, "subir")} color={Colors.secondary}/>
        <Button title="Bajar" onPress={nextGuessHandler.bind(this, "bajar")} color={Colors.primary}/>
      </GameCard>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
