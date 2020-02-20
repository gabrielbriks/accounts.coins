import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

// import { Container } from './styles';

export default function RegisterExpenses() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}> Page New Expenses </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    alignContent: 'center'    
  },
  text: {
    fontSize: 35,
  }

});