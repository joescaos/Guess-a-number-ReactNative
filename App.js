import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/headerComponents';
import StartGame from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';

export default function App() {
 
  const [userNumber, setUserNumber ] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={startGameHandler}/>

  if(userNumber){
    content =   <GameScreen userChoice={userNumber}/>
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
