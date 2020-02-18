import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Login(){
    return (
        <Container >
        <Text style={{fontSize: 35, color: '#000'}}>
        Page Login!!
        </Text>
        </Container>
    );

}

const Container = styled.View`
    flex:1;
    background -color: #B805;
    align-items: center;
    text-align: center;

`;