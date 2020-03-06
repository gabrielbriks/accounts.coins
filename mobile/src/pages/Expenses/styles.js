import { StyleSheet } from "react-native";
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;
  margin-top: 38px;
`;

export const ListItem = styled.View`
  height: 85px;
  width: 100%;
  margin-top: 8px;
  /* background-color: #0ca2; */
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #333;
`;

export const ItemDateExpense = styled.Text`
  position: absolute;
  margin-left: 275px;
  margin-top: 18px;
  opacity: 0.6;
`;

export const ItemCategory = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  color: #000;
  opacity: 0.6;  
`;

export const DescriptionItem = styled.Text`
  font-size: 18px;  
  font-weight: 300;
  margin-left: 30px;
  color: #000;
  opacity: 0.6;
`;

export const ItemValue = styled.Text`
  font-size: 18px;  
  font-weight: 300;
  margin-left: 30px;
  color: #000;
  opacity: 0.6;
`;