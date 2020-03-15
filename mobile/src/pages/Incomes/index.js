import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  AsyncStorage,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components';
import { Button } from 'react-native-elements';
import { TextMask } from 'react-native-masked-text';

import {
  Container,
  CardContainer,
  ContainerTitle,
  CardTitle,
  CardValue,
} from './styles';
import api from '../../services/api';

export default function Incomes({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    async function loadIncomesByUser() {
      const idUser = await AsyncStorage.getItem('@UserData:id');
      const response = await api.get('/receitas', {
        params: {
          idUser,
        },
      });

      setIncomes(response.data);
      setLoading(false);
    }
    loadIncomesByUser();
  }, []);

  async function DeleteIncome(idIncome) {
    console.log(idIncome);
    const response = await api.delete(`/receitadestroy/${idIncome}`);

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
    <ScrollView style={styles.container}>
      <Modal visible={loading} transparent={true} animationType={'none'}>
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="large"
          color="#fff"
          animating={loading}
          hidesWhenStopped={true}
        />
      </Modal>
      <Container>
        {incomes.map(income => (
          <CardContainer key={income._id}>
            <ContainerTitle>
              <TouchableOpacity
                style={styles.icons}
                onPress={() => {
                  DeleteIncome(income._id);
                }}
              >
                <Icon name="delete" size={38} color="#ce001d" />
              </TouchableOpacity>
              <CardTitle>{income.name}</CardTitle>
            </ContainerTitle>
            {/* <CardValue>R$ {income.value}</CardValue> */}
            <TextMask
              type="money"
              value={income.value}
              style={styles.cardValueMask}
            />
          </CardContainer>
        ))}
      </Container>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4169E1',
  },
  icons: {
    width: 55,
    height: 55,
    backgroundColor: 'transparent',
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingIndicator: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 270,
  },
  cardValueMask: {
    flex: 1,
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 18,
  },
});
