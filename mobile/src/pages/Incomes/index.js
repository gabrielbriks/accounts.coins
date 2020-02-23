import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styled from "styled-components";

import { Container, CardContainer, ContainerTitle, CardTitle, CardValue } from './styles';

export default function Incomes() {
  
  async function showIncomesByUser() {
    
  }

  return (
    <ScrollView style={styles.container}>
      <Container>
        <Text style={{fontSize: 32}}>Page Incomes</Text>

        <CardContainer>{/* This is Card , Has tamanho and background and bordes*/}
        <ContainerTitle>{/* This is Container title of card, has a line bottom */}
          <Icon />{/* Icon with action delete */}
          <CardTitle> Investimentos </CardTitle>{/* Title of Card */}
        </ContainerTitle>
        <CardValue>R$ 700,56</CardValue>{/* This is Card Value */}   
        </CardContainer>

        <CardContainer>{/* This is Card , Has tamanho and background and bordes*/}
        <ContainerTitle>{/* This is Container title of card, has a line bottom */}
          <Icon />{/* Icon with action delete */}
          <CardTitle> Freelancers </CardTitle>{/* Title of Card */}
        </ContainerTitle>
        <CardValue>R$ 700,56</CardValue>{/* This is Card Value */}   
        </CardContainer>
        
        <CardContainer>{/* This is Card , Has tamanho and background and bordes*/}
        <ContainerTitle>{/* This is Container title of card, has a line bottom */}
          <Icon />{/* Icon with action delete */}
          <CardTitle> Name Income </CardTitle>{/* Title of Card */}
        </ContainerTitle>
        <CardValue>R$ 700,56</CardValue>{/* This is Card Value */}   
        </CardContainer>

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
  }
});
