import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { TextMask } from 'react-native-masked-text';

import api from '../../services/api';
import {
  Container,
  Card,
  CardContent,
  CardContentTitle,
  CardHeader,
  Line,
  CardTitle,
} from './styles';

export default function CardExpenses(prop) {
  const [balance, setBalance] = useState(0);
  const { newRegisterAlteration } = prop;
  useEffect(() => {
    /*  Saldo Receitas */
    async function ExpensesBalance() {
      const idUser = await AsyncStorage.getItem('@UserData:id');

      const response = await api.get('/saldodespesas', {
        params: {
          idUser,
        },
      });

      const { _id, saldo } = response.data[0];
      setBalance(saldo);
      await AsyncStorage.setItem('@BalanceExpense:value', saldo.toString());
    }

    ExpensesBalance();
  }, [newRegisterAlteration]);

  return (
    <>
      <Container>
        <Card>
          <CardHeader>
            <CardTitle>Despesas</CardTitle>
          </CardHeader>
          <Line />
          <CardContent>
            <CardContentTitle>Saldo Despesas</CardContentTitle>
            <Text style={styles.saldos}>
              {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(balance)}
            </Text>
            {/* <TextMask type="money" value={balance} style={styles.saldos} /> */}
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
    color: '#EF3A3A',
    marginTop: 3,
  },
});
