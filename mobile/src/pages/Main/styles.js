import React from 'react';
import { StyleSheet } from "react-native";
import styled from "styled-components";


export const ContainerBtn = styled.View`
  flex: 1;   
  margin-left: 300px;
  margin-top: 580px;
  position: absolute;
  align-items: center;
  align-content: center;
`;

export const BackgroundBtnAdd = styled.View`
  flex: 1;
  background-color: transparent;
  width: 52px;  
  height: 52px;    
  align-self: flex-end;
  margin-top: 0px; 
  border-radius: 100px;
`;


export const Container = styled.ScrollView`
  flex: 1;
  background-color: #4169E1;
  padding-top: 20px;
`;

export const BackgroundAvatarIcon = styled.View`
  flex: 1;
  width: 65px;
  margin: 12px;
  background-color: #FFF;
  border-radius: 100px; 
  align-items: center;
`;

export const MainHeader = styled.View`
  height: 90px;
  align-items: flex-end;
`;

export const ContainerBtnModal = styled.View`
  flex: 1;   
  margin-left: 278px;
  margin-top: 540px;
  position: absolute;
  align-items: center;
  align-content: center;
`;

export const BackgroundBtnAddModal = styled.View`
  flex: 1;
  /* background-color: rgba(255,255,255,0.4); */
  width: 49px;
  height: 47px;
  align-self: flex-end;
  margin-top: 0px;
  border-radius: 100px;
  flex-direction: column;
  align-content: center;
`;

export const ContainerBtnModalOptionsExpenses = styled.View`
  flex: 1;   
  margin-left: 270px;
  margin-top: 420px;
  position: absolute;
  align-items: center;
  align-content: center;
`;

export const ContainerBtnModalIncomes = styled.View`
  flex: 1;   
  margin-left: 270px;
  margin-top: 478px;
  position: absolute;
  align-items: center;
  align-content: center;
`;


export const TextOptionExpense = styled.Text`
  font-size: 20px;
  color: #000; 
  font-weight: bold;
  margin-top: 430px;
  margin-left: 100px;    
`;

export const TextOptionIncome = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin-top: 485px;
  margin-left: 110px;
  position: absolute;
`;
