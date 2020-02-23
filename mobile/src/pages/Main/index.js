import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal';

import CardExpense from '../../components/CardExpenses';
import CardIncomes from  '../../components/CardIncomes';
import {  
  ContainerBtn,BackgroundBtnAdd,Container,BackgroundAvatarIcon, MainHeader, ContainerBtnModal,
  BackgroundBtnAddModal, ContainerBtnModalOptionsExpenses, ContainerBtnModalIncomes, TextOptionExpense,
  TextOptionIncome } from "./styles";


export default function Main({ navigation }){
  
  const [modalIsVisible, setModalIsVisible] = useState(false);  

  async function showExpenses (params) {
    navigation.navigate('Expenses');
  }

  async function showIncomes (params) {
    navigation.navigate('Incomes');
  }

  return (

    <>
    
      <Container >
       
        <MainHeader style={{/*backgroundColor: '#333'*/}}>
          <BackgroundAvatarIcon > 
            <Icon name="account-circle" size={65} color={'#343434'} />
          </BackgroundAvatarIcon>
        </MainHeader>
        
        <TouchableOpacity onPress={ showExpenses } >
          <CardExpense />  
        </TouchableOpacity>
        
        <TouchableOpacity onPress={ showIncomes }>
          <CardIncomes /> 
        </TouchableOpacity>

        <Text style={{fontSize: 72, color: '#fff'}}>
          Exemple ScrollView ... 
        </Text>
          
        <Modal isVisible={modalIsVisible} >
          <View style={styles.viewModal}>
          
            <ContainerBtnModal>
              <BackgroundBtnAddModal>
                <Icon name="cancel" size={52} color={'#010'} onPress={() => setModalIsVisible(false)}/>                
              </BackgroundBtnAddModal>    
            </ContainerBtnModal>
            
            <View>
             <TextOptionExpense>Adicionar despesa</TextOptionExpense>
             <TextOptionIncome>Adicionar Receita</TextOptionIncome>  
            </View>
                       
           
            <ContainerBtnModalOptionsExpenses>
              <BackgroundBtnAddModal>
                <Icon 
                  name="add-circle" 
                  size={52} 
                  color={'#000'} 
                  onPress={ () =>
                  { 
                    navigation.navigate('RegisterExpenses'); 
                    setModalIsVisible(false);
                  }}
                />
              </BackgroundBtnAddModal>    
            </ContainerBtnModalOptionsExpenses> 

            <ContainerBtnModalIncomes>
              <BackgroundBtnAddModal>
                <Icon
                  name="add-circle" 
                  size={52} 
                  color={'#000'} 
                  onPress={() => {
                    navigation.navigate('RegisterIncomes'); 
                    setModalIsVisible(false);
                  }}
                 />
              </BackgroundBtnAddModal>    
            </ContainerBtnModalIncomes> 

          </View>
        </Modal>
      
      </Container>
      <ContainerBtn>
        <BackgroundBtnAdd>
          <Icon name="add-circle" size={52} color={'#343434'} onPress={() => setModalIsVisible(true)}/>
        </BackgroundBtnAdd>    
      </ContainerBtn>  

    </>
  );
}

const styles = StyleSheet.create({
  viewModal: {
    flex:1,
    backgroundColor: '#fff',    
    opacity: 0.8
    
  },
  buttonModal:{
    borderRadius: 100,
  },
  
});


