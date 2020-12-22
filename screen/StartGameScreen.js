import React, { useState } from "react";
import {
  View,
  Text,
  Card,
  StyleSheet,
  Button,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";

import GameCard from "../components/GameCardComponent";
import Colors from "../constants/colors";
import Input from "../components/InputComponent";
import NumberContainer from '../components/NumberContainer';

const StartGame = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmedInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if ( isNaN(chosenNumber)|| chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Número invalido', 
        'Debes ingresar un numero entre 1 y 99', 
        [{text: 'Ingresar de nuevogit ', style: 'destructive', onPress: resetInputHandler}]
        )
      return;
    };
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <GameCard style={styles.summaryCard}>
         <NumberContainer>{selectedNumber}</NumberContainer>
         <Button title='Iniciar Juego' color= {Colors.secondary} onPress={() => props.onStartGame(selectedNumber)}/>
      </GameCard>
    )
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Iniciar un nuevo intento</Text>
        <GameCard style={styles.inputContainer}>
          <Text>Selecciona un nuevo numero</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.btn}>
              <Button
                title="Borrar"
                color={Colors.secondary}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="Intentar"
                color={Colors.primary}
                onPress={confirmedInputHandler}
              />
            </View>
          </View>
        </GameCard>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  btn: {
    width: 100,
  },
  input: {
    width: 80,
    textAlign: "center",
  },
  summaryCard: {
    marginTop: 20,
  },
});

export default StartGame;
