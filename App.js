import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/headerComponents';
import StartGame from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen';

export default function App() {
 
  const [userNumber, setUserNumber ] = useState();

  const [guessRounds, setGuessRounds] = useState(0);

  const startNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);

  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGame onStartGame={startGameHandler}/>

  if(userNumber && guessRounds <= 0){
    content =   <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if(guessRounds > 0){
    content = <GameOverScreen userNumber={userNumber} numberOfRounds={guessRounds} onRestart={startNewGameHandler}/>
  }

  const title = "Adivina el número"
  return (
    <View style={styles.container}>
      <Header title={title}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
