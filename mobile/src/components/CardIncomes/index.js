import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

export default function CardIncomes(){
  return (
    <>
      <View>
      <Card>
          <CardContent>
            <Title>Saldo Receitas</Title>
            <Description>R$ 6.723,39</Description>
          </CardContent>
        </Card>
      </View>
    </>
  );

}

// const CardHeader = styled.View`


// `;

const Card = styled.View`
    flex: 1;
    background-color: #FFF;
    border-radius: 7px;
    margin: 0 20px;
    height: 295px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

`;
const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  color: #999;

`;

const Description = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #00DB16;
  margin-top: 3px;
  

`;