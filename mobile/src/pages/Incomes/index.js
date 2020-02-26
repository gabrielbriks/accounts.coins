import React, { useState ,useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styled from "styled-components";
import { Button} from 'react-native-elements';

import { Container, CardContainer, ContainerTitle, CardTitle, CardValue } from './styles';
import api from "../../services/api";

export default function Incomes() {
  const [loading, setLoading] = useState(true);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {

    async function loadIncomesByUser() {
      const response = await api.get('/receitas');
  
      setIncomes(response.data);
      setLoading(false);
      
    }
    loadIncomesByUser();
  },[]);


  return (
    <ScrollView style={styles.container}>
      <Modal visible={loading} transparent = { true } animationType = { 'none' }>
        <ActivityIndicator style={styles.loadingIndicator} size="large" color="#fff" animating={loading} hidesWhenStopped={true} />
      </Modal>
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
  loadingIndicator: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignSelf:"center",
    marginTop: 270,
  },
});
