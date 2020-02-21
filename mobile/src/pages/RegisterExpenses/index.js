import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

// import { Container } from './styles';

export default function RegisterExpenses() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}> Nome dessa Despesa </Text>
        <TextInput 
          style = {styles.inputs} 
          placeholder = "Ex: SALÁRIO"
          placeholderTextColor = "#acacac"
          autoCapitalize = "characters"
          autoCorrect = {false}
          /* value = {nameExpenses} */
          /* onChangeText = {setNameExpenses} */
        />
        <Text style={styles.text}> Valor dessa Despesa </Text>
        <TextInput 
          style = {styles.inputs} 
          placeholder = "Ex: 723,90"
          placeholderTextColor = "#acacac"
          autoCapitalize = "characters"
          autoCorrect = {false}
          keyboardType= "numeric"
          /* value = {nameExpenses} */
          /* onChangeText = {setNameExpenses} */
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'flex-start',
    alignContent: 'center',
    marginLeft: 10,   
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 10,

  },
  inputs:{
    width: 310,
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 0,
    justifyContent: "center",
    alignItems: "stretch",
    // borderBottomStartRadius: 100,
    borderBottomWidth: 1.2,
    borderBottomColor:"#333",
    height: 35,
    borderColor: "#000",
    marginLeft: 14,
  }

});