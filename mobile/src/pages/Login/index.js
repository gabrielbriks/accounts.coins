import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TextInput, TouchableOpacity, AsyncStorage, StatusBar, ActivityIndicator} from 'react-native';
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationSwitchScreenProps, NavigationStackOptions, createStackNavigator } from 'react-navigation-stack';


import api from "../../services/api";
import { Container, ContainerSignIn, Button, ButtonText  } from "./styles";

/* A propiedade navigation, vem de uma forma automatica para todas as pages da nossa aplication */
export default function Login({ navigation }){
   //NavigationStackOptions({ hideHeader: {visible: false} })
    // navigation.setParams({
    //     hideHeader: true
    // });
    
   

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function signInPress(){
        setLoading(true);

       
        const response = await api.post('/signin', {
            params:{
                login,
                password
            }
        });
        //console.log(response.status);
        
        if(response.status != 200){
            let error = 'Opss!! Login or Password not exist! Please, try again ...';
            return alert(error);            
        }
        
        //console.log('entrei no loading off')
        setLoading(false);
        navigation.navigate('Main');
        
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



