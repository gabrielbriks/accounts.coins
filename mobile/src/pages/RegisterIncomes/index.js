import React, { useState, useEffect } from 'react';
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
import { ListItem, Radio, Left, Right } from 'native-base';

import api from '../../services/api';

export default function RegisterIncomes({ navigation }) {
  const [nameIncome, setNameIncome] = useState('');
  const [optionCategory, setOptionCategory] = useState('');
  const [value, setValue] = useState('');
  const [showBtnDelete, setShowBtnDelete] = useState('');
  const [idIncome, setIdIncome] = useState('');

  useEffect(() => {
    if (navigation.state.params) {
      const { _id, name, value, category } = navigation.state.params.income;
      let wasDelete = navigation.state.params.delete;
      console.log(navigation.state.params.income);
      console.log(wasDelete);

      setIdIncome(_id);
      setNameIncome(name);
      setValue(value);
      setOptionCategory(category);
      setShowBtnDelete(wasDelete);
      console.log(idIncome);
    }
  }, []);

  async function SaveIncome() {
    const byRegistered = await AsyncStorage.getItem('@UserData:id');

    if (!nameIncome != null && !optionCategory != null && !value > 0) {
      return Alert.alert(
        'OPPS!',
        'Preencha todos os campos com informações validas!  ;)',
        [
          {
            text: 'OK',
          },
        ]
      );
    }

    const response = await api.post('/receita', {
      name: nameIncome,
      value,
      category: optionCategory,
      byRegistered,
    });

    if (!response.data) {
      return Alert.alert(
        'OPPS!',
        'Houve um empecilho ao salvar sua Receita, confira sua conexão e tente novamente!  :)',
        [
          {
            text: 'OK',
          },
        ]
      );
    }
    setNameIncome('');
    setValue('');

    Alert.alert('SUCESSO', 'Registro salvo com sucesso!', [
      {
        text: 'OK',
        onPress: () =>
          navigation.navigate('Main', { newRegisterAlteration: response.data }),
      },
    ]);
  }
  async function UpdateIncome(idIncome) {
    if (!nameIncome != null && !optionCategory != null && !value > 0) {
      return Alert.alert(
        'OPPS!',
        'Preencha todos os campos com informações validas!  ;)',
        [
          {
            text: 'OK',
          },
        ]
      );
    }

    const response = await api.put(`/receitaupdate/${idIncome}`, {
      name: nameIncome,
      value,
      category: optionCategory,
    });
    console.log(response.data);
    if (!response.data) {
      return Alert.alert(
        'OPPS!',
        'Houve um empecilho ao atualizar sua Receita, confira sua conexão e tente novamente!  :)',
        [
          {
            text: 'OK',
          },
        ]
      );
    }
    console.log(response.data);
    Alert.alert('SUCESS!', 'A Receita foi atualizada com sucesso!', [
      {
        text: 'OK',
      },
    ]);
    navigation.navigate('Main', { newRegisterAlteration: response.data });
  }

  async function DeleteIncome(idIncome) {
    console.log(idIncome);
    const response = await api.delete(`/receitadestroy/${idIncome}`);
    console.log(response.data);
    if (response.data.error) {
      return Alert.alert('OPPS!', response.data.error, [
        {
          text: 'OK',
        },
      ]);
    }
    console.log(response.data);
    Alert.alert('SUCESS!', 'A Receita foi excluída com sucesso!', [
      {
        text: 'OK',
      },
    ]);
    navigation.navigate('Main', { newRegisterAlteration: response.data });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}> Nome dessa Receita </Text>
        <TextInput
          style={styles.inputs}
          placeholder="Ex: SALÁRIO"
          placeholderTextColor="#acacac"
          autoCapitalize="characters"
          autoCorrect={false}
          value={nameIncome}
          onChangeText={text => setNameIncome(text)}
        />
        <Text style={styles.text}> Valor dessa Receita </Text>
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
          <Text style={styles.text}>Categoria dessa Receita</Text>

          <ListItem style={{ width: 320 }}>
            <Left>
              <Text>Remuneração</Text>
            </Left>
            <Right>
              <Radio
                selectedColor={'#4169E1'}
                selected={optionCategory === 'Remuneracao' ? true : false}
                onPress={() => setOptionCategory('Remuneracao')}
              />
            </Right>
          </ListItem>
          <ListItem style={{ width: 320 }}>
            <Left>
              <Text>Bônus</Text>
            </Left>
            <Right>
              <Radio
                selectedColor={'#4169E1'}
                selected={optionCategory === 'Bonus' ? true : false}
                onPress={() => setOptionCategory('Bonus')}
              />
            </Right>
          </ListItem>
          <ListItem style={{ width: 320 }}>
            <Left>
              <Text>Outros</Text>
            </Left>
            <Right>
              <Radio
                selectedColor={'#4169E1'}
                selected={optionCategory === 'Outros' ? true : false}
                onPress={() => setOptionCategory('Outros')}
              />
            </Right>
          </ListItem>
          <Buttons>
            {!showBtnDelete ? null : (
              <TouchableOpacity
                title="Excluir"
                style={styles.buttonDelete}
                onPress={() => {
                  DeleteIncome(idIncome);
                }}
              >
                <ButtonText>Excluir</ButtonText>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              title="Salvar"
              style={styles.buttonSave}
              onPress={() => {
                showBtnDelete ? UpdateIncome(idIncome) : SaveIncome();
              }}
            >
              <ButtonText>Salvar</ButtonText>
            </TouchableOpacity>
          </Buttons>
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
    marginTop: 10,
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
  buttonDelete: {
    backgroundColor: '#f00',
    width: 100,
    height: 37,
    marginTop: 35,
    borderRadius: 25,
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 25,
  },
  buttonSave: {
    backgroundColor: '#333',
    width: 100,
    height: 37,
    marginTop: 35,
    borderRadius: 25,
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 25,
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
const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: 35px;
`;
