import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from "react-native-gesture-handler";
import styled from "styled-components";


export default function Main(){
  return (

    <>
      <View style={ styles.container }>
      <Content>
        <Card>
          <CardContent>
            <Title>Saldo Despesas</Title>
            <Description>R$ 2.987,36</Description>
          </CardContent>
        </Card>

       
         
      </Content>
      
      
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
    paddingTop: 20,
  },


 });

// ## Components


const Header = styled.View`


`;

const Content = styled.View`
    flex: 1;
    max-height: 100%;
    z-index: 5;
`;


const CardHeader = styled.View`


`;

const Card = styled.View`
    flex: 1;
    background-color: #FFF;
    border-radius: 7px;
    margin: 0 20px;
    height: 295px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

`;
const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  color: #999;

`;

const Description = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #EF3A3A;
  margin-top: 3px;
  

`;

