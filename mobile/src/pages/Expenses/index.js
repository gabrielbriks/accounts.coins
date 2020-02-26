import React, { useState, useEffect }from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Modal } from 'react-native';
import styled from 'styled-components';
import moment from 'moment';
import momentTz from 'moment-timezone';
import 'moment/locale/pt-br' 



import { Container, ListItem, DescriptionItem, ItemCategory,ItemDateExpense, ItemValue, 
} from './styles';
import api from '../../services/api';

export default function Expenses() {
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);
  
 
  useEffect(() => {
   //console.log(loading);
    async function loadExpensesByUser() {
      const response = await api.get('/despesas');
      
      setExpenses(response.data);
      setLoading(false);
      //console.log('DENTRO', response.data);
    }
    loadExpensesByUser();
  }, []);

  //console.log('STATE',expenses);
  
  return (
    <ScrollView>
      <Modal visible={loading} transparent = { true } animationType = { 'none' }>
        <ActivityIndicator style={styles.loadingIndicator} size="large" color="#0000ff" animating={loading} hidesWhenStopped={true} />
      </Modal>
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

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignSelf:"center",
    marginTop: 250,
  },
});