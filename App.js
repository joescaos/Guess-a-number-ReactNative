import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/headerComponents';
import StartGame from './screen/StartGameScreen';

export default function App() {

  const title = "Adivina el número"
  return (
    <View style={styles.container}>
      <Header title={title}/>
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
