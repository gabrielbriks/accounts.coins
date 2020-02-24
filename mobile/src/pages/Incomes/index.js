import React, { useState ,useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styled from "styled-components";
import { Button } from 'react-native-elements';

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
              <Button 
                icon={<Icon name="delete" size={35} color="#000"/>}
                buttonStyle={{borderRadius: 100, backgroundColor: "transparent"}}
                // onPress={() => setModalIsVisible(false)}
                containerStyle={styles.icons}
              /> 
              <CardTitle>{income.description}</CardTitle>
            </ContainerTitle>
            <CardValue>R$ {income.value}</CardValue> 
          </CardContainer>
       ))}
        
{/* 
        <CardContainer>
        <ContainerTitle>
          <Button 
            icon={<Icon name="delete" size={35} color="#000"/>}
            buttonStyle={{borderRadius: 100, backgroundColor: "transparent"}}
            // onPress={() => setModalIsVisible(false)}
            containerStyle={styles.icons}
          /> 
          <CardTitle> Freelancers </CardTitle>
        </ContainerTitle>
        <CardValue>R$ 700,56</CardValue>
        </CardContainer> */}
        
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
    position: "absolute",
    marginLeft: 280,
  },
});
