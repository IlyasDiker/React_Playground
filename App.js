import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Rolls Royce TEST</Text>
      <TouchableOpacity onPress={() => console.log('test')}>
        <Image 
        source={{ 
          width: 200,
          height: 200,
          uri: "https://i.imgur.com/oPgSc6Q.jpg"}} />
          </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
