import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationSwitchScreenProps } from 'react-navigation';

/* A propiedade navigation, vem de uma forma automatica para todas as pages da nossa aplication */
export default function Login({ navigation }){

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
    async function singInPress(){
        console.log(login);
        console.log(password);
        navigation.navigate('Main');
    }

    return (
        <Container>
            <ContainerSingIn>
                <TextInput style ={styles.input}
                    placeholder="Login"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value = {login}
                    onChangeText = {setLogin}
                />
                <TextInput style={styles.input}
                    placeholder="Senha"                    
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    onChangeText={setPassword}
                    value ={password}
                />
                <TouchableOpacity 
                    title="Entrar"
                    style={styles.button}
                    onPress={ singInPress}
                >
                    <ButtonText>Entrar</ButtonText>
                </TouchableOpacity>
            </ContainerSingIn>
        </Container>
    );

}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        width: 300,
        height: 40,
        marginTop: 20    ,
        borderRadius: 25,
        textAlign: "center"
    },
    button:{
        backgroundColor: '#333',
        width: 100,
        height: 37,
        marginTop: 35,
        borderRadius: 25,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center"
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
    margin-top: 270px;
    align-self: center;
`;

const Button = styled.Button`
    background-color: #333;
    margin-top: 50px;
`;

const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-top: 7px;
    text-align: center;    
    justify-content:center;
`;