import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import styled from 'styled-components';
import { TextMask } from 'react-native-masked-text';
import NumberFormat from 'react-number-format';

import api from '../../services/api';
import checkBalance from '../../utils/checkBalances';
import {
  Container,
  Card,
  CardContent,
  Title,
  CardHeader,
  Line,
  CardTitle,
} from './styles';

export default function CardIncomes(prop) {
  const { newRegisterAlteration } = prop;
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    /*  Saldo Receitas */
    async function IncomesBalance() {
      console.log('entrei CArd Incomes');
      const idUser = await AsyncStorage.getItem('@UserData:id');

      const response = await api.get('/saldoreceitas', {
        params: {
          idUser,
        },
      });
      const { _id, saldo } = response.data[0];
      const saldoChecked = await checkBalance(saldo);
      console.log(saldoChecked.toFixed(2).replace(/[^0-9\,]+/g, ','));
      setBalance(saldoChecked.toFixed(2));
    }
    IncomesBalance();
  }, [newRegisterAlteration]);

  return (
    <>
      <Container>
        <Card>
          <CardHeader>
            <CardTitle>Receitas</CardTitle>
          </CardHeader>
          <Line />
          <CardContent>
            <Title>Saldo Receitas</Title>
            {/* <TextMask type="money" value={balance} style={styles.saldos} /> */}
            <NumberFormat
              value={balance}
              displayType={'text'}
              prefix={'R$'}
              renderText={value => <Text style={styles.saldos}>{value}</Text>}
            />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  saldos: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00DB16',
    marginTop: 3,
  },
});
