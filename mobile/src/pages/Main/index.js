import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import Icon from 'react-native-vector-icons/MaterialIcons'

import CardExpense from '../../components/CardExpenses';
import CardIncomes from  '../../components/CardIncomes';

export default function Main(){
  // const translateY = new Animated.Value(0);

  // const animatedEvent = Animated.event(
  //   [
  //     {
  //       nativeEvent: {
  //         translationY: translateY,
  //       }
  //     }
  //   ],
  //   {
  //     useNativeDriver: true,
  //   }
  // );

  return (

    <>
    
      <Container >
       
        <MainHeader style={{/*backgroundColor: '#333'*/}}>
          <BackgroundIcon > 
            <Icon name="account-circle" size={65} />
          </BackgroundIcon>
        </MainHeader>
        
        <CardExpense style={styles.cardExpense}/>  
        <CardIncomes style={styles.cardIncomes} /> 
        
        <Text style={{fontSize: 100, color: '#fff'}}>
        Exemple ScrollView: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>
          
        
      
      </Container>
      <ContainerBtn>
        <BtnAdd>
          <Icon name="add-circle" size={70} />
        </BtnAdd>    
      </ContainerBtn>   
    

    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#4169E1',
  //   paddingTop: 20,
    
  // },
  
 });


 // ## Components

 const ContainerBtn = styled.View`
    flex: 1;   
    margin-left: 275px;
    margin-top: 392px;
    position: absolute;
  `;

 const BtnAdd = styled.View`
    flex: 1;
    background-color: #FFF;
    width: 70px;  
    height: 70px;    
    align-self: flex-end;
    margin-top: 0px; 
    border-radius: 100px;s
  `;


 const Container = styled.ScrollView`
    flex: 1;
    background-color: #4169E1;
    padding-top: 20px;
  `;

 const BackgroundIcon = styled.View`
    flex: 1;
    width: 65px;
    margin: 12px;
    background-color: #FFF;
    border-radius: 100px; 
 `;

  const MainHeader = styled.View`
    height: 90px;     
    align-items: flex-end; 
  `;
