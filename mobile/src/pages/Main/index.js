import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import Icon from 'react-native-vector-icons/MaterialIcons'

import CardExpense from '../../components/CardExpenses';
import CardIncomes from  '../../components/CardIncomes';

export default function Main(){
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    {
      useNativeDriver: true,
    }
  );

  return (

    <>
    {/* <ScrollView style= {{ marginTop: 0, marginHorizontal: 10, position: "relative", backgroundColor: '#999'  }}> */}
      <Container >
        <MainHeader style={{/*backgroundColor: '#333'*/}}>
          <BackgroundIcon > 
          <Icon name="account-circle" size={65} />
          </BackgroundIcon>
        </MainHeader>
        
          <CardExpense style={styles.cardExpense}/>  
          <CardIncomes style={styles.cardIncomes} />         
          <Text style={{fontSize: 100, color: '#fff'}}>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </Text>
          
        
      
      </Container>
    {/* </ScrollView> */}

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
