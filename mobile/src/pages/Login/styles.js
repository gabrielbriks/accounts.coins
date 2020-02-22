import React from 'react';
import { StyleSheet } from "react-native";
import styled from "styled-components";

export const Container = styled.View`
    flex:1;
    background-color: #4169E1;
    align-items: center;
    text-align: center;
`;

export const ContainerSignIn = styled.View`
    flex:1;
    margin-top: 270px;
    align-self: center;
`;

/* CONFERIR UTILIZAÇÃO */
export const Button = styled.Button`
    background-color: #333;
    margin-top: 50px;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-top: 7px;
    text-align: center;    
    justify-content:center;
`;