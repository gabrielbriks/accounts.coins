import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TextInput, TouchableOpacity, AsyncStorage, StatusBar, ActivityIndicator} from 'react-native';
import styled from "styled-components";
import Icon from 'react-native-vector-icons/MaterialIcons';


import api from "../../services/api";
import { Container, ContainerSignIn, Button, ButtonText  } from "./styles";

/* A propiedade navigation, vem de uma forma automatica para todas as pages da nossa aplication */
export default function Login({ navigation }){
   


    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function signInPress(){
        setLoading(true);
        
        if(login.length == 0 || password.length == 0){
            let error = "Preencha usuário e senha para continuar!"
            alert(error);
            setLoading(false);
        }
        else{
            try{

                const response = await api.post('/signin', {
                    params:{
                        login,
                        password
                    }
                });
                /// AJUSTAR ESSE COMPORTAMENTO DO RESPONSE QUE NAO ESTA SE COMPORTANDO DE UMA FORMA LEGAL;
                //console.log("response::: ", response.config.data);
                await AsyncStorage.setItem("@LogonUser", response.config.data);
                

                setLoading(false);
                navigation.navigate('Main');
            }
            catch (_err){
                let error = "Houve um problema com o login, verifique suas credenciais!"
                return alert(error);
            }
        }
        
    }

    return (
        
        <Container>
            <StatusBar hidden /> 
            <ActivityIndicator style={styles.loadingIndicator} size="large" color="#fff" animating={loading} hidesWhenStopped={true} />
            <ContainerSignIn>
                <TextInput style ={styles.input}
                    placeholder="Login"
                    placeholderTextColor={'rgba(0, 0, 0, 0.25)'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value = {login}
                    onChangeText = {setLogin}
                    required={true}
                />
                <TextInput style={styles.input}
                    placeholder="Senha" 
                    placeholderTextColor={'rgba(0, 0, 0, 0.25)'}                   
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    onChangeText={setPassword}
                    value ={password}
                    maxLength={12}
                    
                />
                <TouchableOpacity 
                    title="Entrar"
                    style={styles.button}
                    onPress={ () => { signInPress(); }}
                >
                    <ButtonText>Entrar</ButtonText>
                </TouchableOpacity>
            </ContainerSignIn>
        </Container>
    );

}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        width: 300,
        height: 40,
        marginTop: 20,
        borderRadius: 25,        
       fontWeight: "bold",
        textAlign: "center",
        alignItems: "center"
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
    },
    loadingIndicator: {
        flex: 1,
        position: "absolute",
        justifyContent: "center",
        alignSelf:"center",
        marginTop: 250,
      },
})



