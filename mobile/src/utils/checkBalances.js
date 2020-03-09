import React from 'react';
import { AsyncStorage } from 'react-native';

export default async function checkBalance(valueIncome) {
  const valueExpense = await AsyncStorage.getItem('@BalanceExpense:value');

  console.log('Valor despesa', valueExpense);
  console.log('Valor Income', valueIncome);
  return valueIncome;
}
