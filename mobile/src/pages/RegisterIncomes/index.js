import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import {TextInputMask}  from "react-native-masked-text";
import styled from "styled-components";


// import { Container } from './styles';

export default function RegisterIncomes() {

  const [categoryChecked, setCategoryChecked] = useState(false);
  const [money, setMoney] = useState('');
  // const [categoryChecked, setCategoryChecked] = useState(false);
  // const [categoryChecked, setCategoryChecked] = useState(false);
  // const [categoryChecked, setCategoryChecked] = useState(false);
  

  return (
    <ScrollView>
      <View style={styles.container}>
          <Text style={styles.text}> Nome dessa Receita </Text>
          <TextInput 
            style = {styles.inputs} 
            placeholder = "Ex: SALÁRIO"
            placeholderTextColor = "#acacac"
            autoCapitalize = "characters"
            autoCorrect = {false}
            /* value = {nameExpenses} */
            /* onChangeText = {setNameExpenses} */
          />
          <Text style={styles.text}> Valor dessa Receita </Text>
          <TextInputMask 
            type={'money'}
            style = {styles.inputs} 
            placeholder = "Ex: 723,90"
            placeholderTextColor = "#acacac"
             autoCorrect = {false}
            keyboardType= "numeric"
            value={money}
            onChangeText={text => {setMoney(text)}}
            
          />

          <View style={styles.viewCategory}>
            <Text style={styles.text}>Categoria dessa Receita</Text>

            <CheckBox
              containerStyle={{
                backgroundColor:"transparent",
                width: 320,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: "rgba(0, 0, 25, 0.8)"
              }}
              textStyle={{flex:1}}
              left             
              title='Remuneração'
              iconRight
              iconType='material'
              checkedIcon='done'
              uncheckedIcon='add'
              checkedColor='blue'
              checked={categoryChecked}
              onPress={() => { !categoryChecked ? setCategoryChecked(true) : setCategoryChecked(false) ; }}
            />
          
            <CheckBox
              containerStyle={{
                backgroundColor:"transparent",
                width: 320,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: "rgba(0, 0, 25, 0.8)"
              }}
              textStyle={{flex:1}}
              left             
              title='Bônus'
              iconRight
              iconType='material'
              checkedIcon='done'
              uncheckedIcon='add'
              checkedColor='blue'
              checked={categoryChecked}
              onPress={() => { !categoryChecked ? setCategoryChecked(true) : setCategoryChecked(false) ; }}
            />

            <CheckBox
              containerStyle={{
                backgroundColor:"transparent",
                width: 320,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: "rgba(0, 0, 25, 0.8)"
              }}
              textStyle={{flex:1}}
              left             
              title='Outros'
              iconRight
              iconType='material'
              checkedIcon='done'
              uncheckedIcon='add'
              checkedColor='blue'
              checked={categoryChecked}
              onPress={() => { !categoryChecked ? setCategoryChecked(true) : setCategoryChecked(false) ; }}
            />

            <TouchableOpacity 
                title="Salvar"
                style={styles.button}
                //onPress={ signInPress}
            >
            <ButtonText>Salvar</ButtonText>
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
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
    justifyContent: "center",
    alignItems: "stretch",
    // borderBottomStartRadius: 100,
    borderBottomWidth: 1.2,
    borderBottomColor:"#333",
    height: 35,
    borderColor: "#000",
    marginLeft: 14,
  },
  viewCategory:{
    marginTop: 42,
    marginBottom: 18,
  },
  button:{
    backgroundColor: '#333',
    width: 100,
    height: 37,
    marginTop: 35,
    borderRadius: 25,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center"
  }

});

const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-top: 7px;
    text-align: center;    
    justify-content:center;
`;

