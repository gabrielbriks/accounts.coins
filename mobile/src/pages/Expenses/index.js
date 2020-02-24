import React, { useState, useEffect }from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components';
import moment from 'moment';
import momentTz from 'moment-timezone';
import 'moment/locale/pt-br' 



import { Container, ListItem, DescriptionItem, ItemCategory,ItemDateExpense, ItemValue, 
} from './styles';
import api from '../../services/api';

export default function Expenses() {

  const [expenses, setExpenses] = useState([]);
 
  useEffect(() => {
    
    async function loadExpensesByUser() {
      const response = await api.get('/despesas');
      
      setExpenses(response.data);

      console.log('DENTRO', response.data);
    } 
    loadExpensesByUser();  
  }, []);

  console.log('STATE',expenses);
  expenses.map(expense =>{console.log(expense.createAt.toString())})
  return (
    <ScrollView>
      <Container>
        
        {expenses.map(expense => (
          
          <ListItem key={expense._id}>{/* Has size of item list, line in buttom and */}
            <ItemDateExpense>{moment(expense.createAt).calendar()}</ItemDateExpense>
            <ItemCategory>{expense.category}</ItemCategory>{/* This is the title of item list, is the name category */}
            <DescriptionItem>{expense.name}</DescriptionItem>{/* Description of expense, exemple "CEB" */}
            <ItemValue>R$ {expense.value/*R$ 37,92*/}</ItemValue>{/* This is value of expense; Can use some TextMask */}
          </ListItem>
        )) }        
    
      </Container>
    </ScrollView>
  );
}

