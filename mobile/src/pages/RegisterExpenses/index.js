import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  Alert,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components';
import { RadioButton } from 'react-native-paper';
import { ListItem, Radio, Left, Right } from 'native-base';

import api from '../../services/api';

export default function RegisterExpenses({ navigation }) {
  const [nameExpense, setNameExpense] = useState('');
  const [value, setValue] = useState('');
  const [optionCategory, setOptioncategory] = useState('');

  async function saveExpense() {
    const byRegistered = await AsyncStorage.getItem('@UserData:id');

    const response = await api.post('/despesa', {
      name: nameExpense,
      value,
      category: optionCategory,
      byRegistered,
    });

    if (!response.data) {
      Alert.alert(
        'OPPS!',
        'Houve um empecilho ao salvar sua Despesa, confira sua conexão e tente novamente!  :)',
        [
          {
            text: 'OK',
          },
        ]
      );
      return Alert;
    }
    setNameExpense('');
    setValue('');

    Alert.alert('SUCESSO', 'Registro salvo com sucesso!', [
      {
        text: 'OK',
        onPress: () =>
          navigation.navigate('Main', { newRegister: response.data }),
      },
    ]);
    Alert;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}> Nome dessa Despesa </Text>
        <TextInput
          style={styles.inputs}
          placeholder="Ex: CONTA LUZ"
          placeholderTextColor="#acacac"
          autoCapitalize="characters"
          autoCorrect={false}
          value={nameExpense}
          onChangeText={text => setNameExpense(text)}
        />
        <Text style={styles.text}> Valor dessa Despesa </Text>
        <TextInputMask
          type={'money'}
          style={styles.inputs}
          placeholder="Ex: 723,90"
          placeholderTextColor="#acacac"
          autoCorrect={false}
          keyboardType="numeric"
          value={value}
          onChangeText={(text, rawText) => setValue(rawText)}
          includeRawValueInChangeText={true}
        />
        <View style={styles.viewCategory}>
          <Text style={styles.text}>Categoria dessa Despesa</Text>
          <ListItem style={{ width: 320 }}>
            <Left>
              <Text>Casa</Text>
            </Left>
            <Right>
              <Radio
                selectedColor={'#4169E1'}
                selected={optionCategory === 'Casa' ? true : false}
                onPress={() => setOptioncategory('Casa')}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Transporte</Text>
            </Left>
            <Right>
              <Radio
                selectedColor={'#4169E1'}
                selected={optionCategory === 'Transporte' ? true : false}
                onPress={() => setOptioncategory('Transporte')}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Comida</Text>
            </Left>
            <Right>
              <Radio
                selectedColor={'#4169E1'}
                selected={optionCategory === 'Comida' ? true : false}
                onPress={() => setOptioncategory('Comida')}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Serviços</Text>
            </Left>
            <Right>
              <Radio
                selectedColor={'#4169E1'}
                selected={optionCategory === 'Servicos' ? true : false}
                onPress={() => setOptioncategory('Servicos')}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={styles.labelsOptionCategory}>Outros Gastos</Text>
            </Left>
            <Right>
              <Radio
                selectedColor={'#4169E1'}
                selected={optionCategory === 'OutrosGastos' ? true : false}
                onPress={() => setOptioncategory('OutrosGastos')}
              />
            </Right>
          </ListItem>

          <TouchableOpacity
            title="Salvar"
            style={styles.button}
            onPress={() => {
              saveExpense();
            }}
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
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 22,
    marginBottom: 10,
  },
  inputs: {
    width: 310,
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderBottomWidth: 1.2,
    borderBottomColor: '#333',
    height: 35,
    borderColor: '#000',
    marginLeft: 14,
  },
  viewCategory: {
    marginTop: 42,
    marginBottom: 18,
  },
  button: {
    backgroundColor: '#333',
    width: 100,
    height: 37,
    marginTop: 35,
    borderRadius: 25,
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  labelsOptionCategory: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    opacity: 0.6,
  },
});

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin-top: 7px;
  text-align: center;
  justify-content: center;
`;
