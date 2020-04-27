import React from 'react';
import { AsyncStorage } from 'react-native';
/*
  Realiza a verificação do saldo da (receitas - despesas), e retorna o resultado
*/
export default async function checkBalance(valueIncome) {
  const valueExpense = await AsyncStorage.getItem('@BalanceExpense:value');
  let balanceExpense = parseFloat(valueExpense);
  let balanceIncome = parseFloat(valueIncome);

  let balanceIncomeResult = balanceIncome - balanceExpense;
  //console.log(balanceIncomeResult);
  return balanceIncomeResult;
}
