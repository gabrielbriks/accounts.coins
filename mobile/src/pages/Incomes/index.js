import React, { useState ,useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styled from "styled-components";
import { Button} from 'react-native-elements';

import { Container, CardContainer, ContainerTitle, CardTitle, CardValue } from './styles';
import api from "../../services/api";

export default function Incomes() {
  
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    async function loadIncomesByUser() {
      const response = await api.get('/receitas');
  
      setIncomes(response.data);
      console.log('DENTRO', response.data);
    }
    loadIncomesByUser();
  },[]);

  console.log('STATE', incomes);

  return (
    <ScrollView style={styles.container}>
      <Container>
       
       {incomes.map(income => (
          <CardContainer key={income._id} >
            <ContainerTitle>
              <TouchableOpacity style={styles.icons} onPress={() => alert('fui pressionado !')}>
                <Icon name="delete" size={38} color="#ce001d"/>
              </TouchableOpacity>              
              <CardTitle>{income.name}</CardTitle>
            </ContainerTitle>
            <CardValue>R$ {income.value}</CardValue> 
          </CardContainer>
       ))}        
        
      </Container>
      
      <Text style={{fontSize: 72, color: '#fff'}}>
          Exemple ScrollView ... 
      </Text>
    </ScrollView>

  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: "#4169E1",
  },
  icons:{
    width: 55,
    height: 55,
    backgroundColor: 'transparent',
    position: "absolute",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: 'center',    
  },
});
