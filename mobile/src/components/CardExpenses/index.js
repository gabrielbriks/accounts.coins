import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage} from 'react-native';
import styled from 'styled-components';

import api from "../../services/api";

export default function CardExpenses(){

  const [balance, setBalance] = useState(0);

  useEffect(() =>{
    /*  Saldo Receitas */
    async function ExpensesBalance() {
      
      const idUser = await AsyncStorage.getItem('@UserData:id');

      const response = await api.get('/saldodespesas', {
        params:{
          idUser
        }
      });

      const { _id, saldo } = response.data[0];
      setBalance(saldo);
    }

    ExpensesBalance();
  },[]);

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
            <Description>R$ {balance}</Description>
          </CardContent>
        </Card>
      </Container>
    </>
  );

}

const Container = styled.View`
  flex-direction: row;

`;

const Card = styled.View`
  flex: 1;
  background-color: #FFF;
  border-radius: 7px;
  margin: 25px 20px;
  height: 295px;    
  left: 0;
  right: 0;
  top: 0;

`;
const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

const CardContentTitle = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  color: #999;

`;

const Description = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #EF3A3A;
  margin-top: 3px;
  

`;

const CardHeader = styled.View`
  height: 48px;
  width: 100%;  
  align-items: center;

`;

const Line = styled.View`
  height: 3px;
  background-color: #EF3A3A;
  align-self: stretch;

`;

const CardTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  margin-top: 9px;
  
`;