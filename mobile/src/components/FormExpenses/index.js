import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

// import { Container } from './styles';

export default function FormExpenses() {
  return (
    <View style={{ flex:1, backgroundColor:'#4169E1'}}>
      <Text>Nome Despesa:</Text>
      <TextInput
          placeholder="Login"
          placeholderTextColor={'rgba(0, 0, 0, 0.25)'}
          autoCapitalize="none"
          autoCorrect={false}
          //value = {login}
          //onChangeText = {setLogin}
          autoFocus={true}
          required={true}
      />
    </View>
  );
}
