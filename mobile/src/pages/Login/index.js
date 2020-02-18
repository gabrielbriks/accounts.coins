import React from 'react';
import { StyleSheet, Text, View, Animated, TextInput, TouchableOpacity } from 'react-native';
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Login(){
    return (
        <Container>
            <ContainerSingIn>
                <TextInput style ={styles.input}
                    placeholder="Login"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                />
                <TouchableOpacity title="entrar" style={styles.button}>
                    <ButtonText>Entrar</ButtonText>
                </TouchableOpacity>
            </ContainerSingIn>
            <Text style={{fontSize: 35, color: '#fff'}}>
            Page Login!!
            </Text>
        </Container>
    );

}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        width: 250,
        height: 50,
        marginTop: 15,
        borderRadius: 25,
        textAlign: "center"
    },
    button:{
        backgroundColor: '#fff',
        width: 100,
        height: 50,
        marginTop: 15,
        borderRadius: 25,
        textAlign: "center",
        alignItems: "center"
    }
})

const Container = styled.View`
    flex:1;
    background-color: #4169E1;
    align-items: center;
    text-align: center;

`;

const ContainerSingIn = styled.View`
    flex:1;
    margin-top: 250px;

`;

const Button = styled.Button`
    background-color: #333;
    margin-top: 50px;
`;

const ButtonText = styled.Text`

`;