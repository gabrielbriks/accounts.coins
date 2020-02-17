import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";

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
      <View style={ styles.container }>
        <MainHeader />
        
          {/* <Text style={{fontSize:50}}>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </Text> */}
           <CardItem>
            <CardExpense style={styles.cardExpense}/>        
          </CardItem>
          <CardItem>
            <CardIncomes style={styles.cardIncomes} />         
          </CardItem>
        
      
      </View>
    {/* </ScrollView> */}

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
    paddingTop: 20,
  },
  cardExpense:{
    flexDirection: "row",
   
    
  },  
  cardIncomes:{
    flexDirection: "row",

  }

 });



 // ## Components

  const CardItem = styled.View`
      flex: 1;
      max-height: 100%;
      z-index: 5;
      flex-direction: column;
      
  `;

  const MainHeader = styled.View`
    height: 70px;
    background: #333;  
  `;
