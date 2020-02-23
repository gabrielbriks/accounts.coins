import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components';

import { Container } from './styles';


export default function Expenses() {

  async function showExpensesByUser() {
    
  }

  return (
    <ScrollView>
      <Container>
        {/* <Text style={{fontSize: 32}}>Page Expenses</Text> */}
        <ListItem>{/* Has size of item list, line in buttom and */}
          <ItemDateExpense>Segunda</ItemDateExpense>
          <ItemCategory>Casa</ItemCategory>{/* This is the title of item list, is the name category */}
          <DescriptionItem>Conta CEB</DescriptionItem>{/* Description of expense, exemple "CEB" */}
          <ItemValue>R$ 37,92</ItemValue>{/* This is value of expense; Can use some TextMask */}
        </ListItem>

        <ListItem>
          <ItemDateExpense>Terça</ItemDateExpense>
          <ItemCategory>Casa</ItemCategory>
          <DescriptionItem>Conta CEB</DescriptionItem>
          <ItemValue>R$ 37,92</ItemValue>
        </ListItem>

        <ListItem>
          <ItemDateExpense>03 FEV</ItemDateExpense>
          <ItemCategory>Casa</ItemCategory>
          <DescriptionItem>Conta CEB</DescriptionItem>
          <ItemValue>R$ 37,92</ItemValue>
        </ListItem>

        <ListItem>
          <ItemDateExpense>27 MAR</ItemDateExpense>
          <ItemCategory>Casa</ItemCategory>
          <DescriptionItem>Conta CEB</DescriptionItem>
          <ItemValue>R$ 37,92</ItemValue>
        </ListItem>

        <ListItem>
          <ItemDateExpense>31 DEZ</ItemDateExpense>
          <ItemCategory>Casa</ItemCategory>
          <DescriptionItem>Conta CEB</DescriptionItem>
          <ItemValue>R$ 37,92</ItemValue>
        </ListItem>

        <ListItem>
          <ItemDateExpense>01 DEZ</ItemDateExpense>
          <ItemCategory>Casa</ItemCategory>
          <DescriptionItem>Conta CEB</DescriptionItem>
          <ItemValue>R$ 37,92</ItemValue>
        </ListItem>

        <ListItem>
          <ItemDateExpense>07 NOV</ItemDateExpense>
          <ItemCategory>Casa</ItemCategory>
          <DescriptionItem>Conta CEB</DescriptionItem>
          <ItemValue>R$ 37,92</ItemValue>
        </ListItem>

        <ListItem>
          <ItemDateExpense>17 OUT</ItemDateExpense>
          <ItemCategory>Casa</ItemCategory>
          <DescriptionItem>Conta CEB</DescriptionItem>
          <ItemValue>R$ 37,92</ItemValue>
        </ListItem>

        <ListItem>
          <ItemDateExpense>11 JUL</ItemDateExpense>
          <ItemCategory>Casa</ItemCategory>
          <DescriptionItem>Conta CEB</DescriptionItem>
          <ItemValue>R$ 37,92</ItemValue>
        </ListItem>

    
      </Container>
    </ScrollView>
  );
}

const ListItem = styled.View`
  height: 85px;
  width: 100%;
  margin-top: 8px;
  /* background-color: #0ca2; */
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #333;
`;

const ItemDateExpense = styled.Text`
  position: absolute;
  margin-left: 275px;
  margin-top: 18px;
  opacity: 0.6;
`;

const ItemCategory = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  color: #000;
  opacity: 0.6;  
`;

const DescriptionItem = styled.Text`
  font-size: 18px;  
  font-weight: 300;
  margin-left: 30px;
  color: #000;
  opacity: 0.6;
`;

const ItemValue = styled.Text`
  font-size: 18px;  
  font-weight: 300;
  margin-left: 30px;
  color: #000;
  opacity: 0.6;
`;