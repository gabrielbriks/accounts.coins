import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, Button, TextComponent} from 'react-native';
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal';

import CardExpense from '../../components/CardExpenses';
import CardIncomes from  '../../components/CardIncomes';

export default function Main({ navigation }){
  
  const [modalIsVisible, setModalIsVisible] = useState(false);  

  return (

    <>
    
      <Container >
       
        <MainHeader style={{/*backgroundColor: '#333'*/}}>
          <BackgroundAvatarIcon > 
            <Icon name="account-circle" size={65} color={'#343434'} />
          </BackgroundAvatarIcon>
        </MainHeader>
        
        <CardExpense style={styles.cardExpense}/>  
        <CardIncomes style={styles.cardIncomes} /> 
        
        <Text style={{fontSize: 100, color: '#fff'}}>
          Exemple ScrollView: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                       
           
            <ContainerBtnModalOptions>
              <BackgroundBtnAddModal>
                <Icon 
                  name="add-circle" 
                  size={52} 
                  color={'#000'} 
                  onPress={ () =>
                  { 
                    navigation.navigate('RegisterExpenses'); 
                    setModalIsVisible(false)
                  }}
                />
                <Icon
                  name="add-circle" 
                  size={52} 
                  color={'#000'} 
                  onPress={() => setModalIsVisible(false)}
                 />
              </BackgroundBtnAddModal>    
            </ContainerBtnModalOptions> 

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



//#region Components


 // ## Components

 const ContainerBtn = styled.View`
    flex: 1;   
    margin-left: 300px;
    margin-top: 580px;
    position: absolute;
    align-items: center;
    align-content: center;
  `;

 const BackgroundBtnAdd = styled.View`
    flex: 1;
    background-color: rgba(255,255,255,0.8);
    width: 52px;  
    height: 52px;    
    align-self: flex-end;
    margin-top: 0px; 
    border-radius: 100px;
  `;


 const Container = styled.ScrollView`
    flex: 1;
    background-color: #4169E1;
    padding-top: 20px;
  `;

 const BackgroundAvatarIcon = styled.View`
    flex: 1;
    width: 65px;
    margin: 12px;
    background-color: #FFF;
    border-radius: 100px; 
    align-items: center;
 `;

  const MainHeader = styled.View`
    height: 90px;
    align-items: flex-end;
  `;

  const ContainerBtnModal = styled.View`
    flex: 1;   
    margin-left: 280px;
    margin-top: 540px;
    position: absolute;
    align-items: center;
    align-content: center;
  `;

  const BackgroundBtnAddModal = styled.View`
    flex: 1;
    background-color: rgba(255,255,255,0.8);
    width: 52px;
    height: 52px;
    align-self: flex-end;
    margin-top: 0px;
    border-radius: 100px;
    flex-direction: column;
  `;

  const ContainerBtnModalOptions = styled.View`
    flex: 1;   
    margin-left: 270px;
    margin-top: 420px;
    position: absolute;
    align-items: center;
    align-content: center;
  `;

  const TextOptionExpense = styled.Text`
    font-size: 20px;
    color: #000; 
    font-weight: bold;
    margin-top: 430px;
    margin-left: 100px;    
  `;

  const TextOptionIncome = styled.Text`
    font-size: 20px;
    color: #000;
    font-weight: bold;
    margin-top: 485px;
    margin-left: 110px;
    position: absolute;
  `;

  //#endregion

