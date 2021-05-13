import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Image, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Rolls Royce TEST</Text>
      <TouchableNativeFeedback onPress={() => console.log('test')}>
        
        <View style={{ width: 200, height:200, backgroundColor: "dodgerblue" }}>
        <Image 
        source={{ 
          width: 100,
          height: 100,
          uri: "https://i.imgur.com/oPgSc6Q.jpg"}} />
        </View>
      </TouchableNativeFeedback>
      <Button 
        color="orange"
        title="Click me" 
        onPress={() => Alert.alert("Title", "Message", [
          {text: "Yes", onPress: ()=>console.log("Yes")},
          {text: "No", onPress: ()=>console.log("No")},
        ])} />
        {/* <Button 
        color="green"
        title="Prompt Alert" 
        onPress={() => Alert.prompt("Are you okay?", "Hmm", text => console.log(text))} /> */}

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
