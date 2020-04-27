import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Modal,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import { TextMask } from 'react-native-masked-text';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/pt-br';

import {
  Container,
  ListItem,
  DescriptionItem,
  ItemCategory,
  ItemDateExpense,
  ItemValue,
} from './styles';
import api from '../../services/api';

export default function Expenses({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function loadExpensesByUser() {
      const idUser = await AsyncStorage.getItem('@UserData:id');

      const response = await api.get('/despesas', {
        params: { idUser },
      });

      setExpenses(response.data);
      setLoading(false);
    }

    loadExpensesByUser();
  }, []);

  return (
    <ScrollView>
      <Modal visible={loading} transparent={true} animationType={'none'}>
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="large"
          color="#0000ff"
          animating={loading}
          hidesWhenStopped={true}
        />
      </Modal>
      <Container>
        {expenses.map(expense => (
          <ListItem
            key={expense._id}
            onPress={() => {
              navigation.navigate('RegisterExpenses', {
                delete: true,
                expense,
              });
            }}
          >
            <ItemDateExpense>
              {moment(expense.createAt).calendar()}
            </ItemDateExpense>
            <ItemCategory>{expense.category}</ItemCategory>
            <DescriptionItem>{expense.name}</DescriptionItem>
            <TextMask
              type="money"
              value={expense.value}
              style={styles.itemValueMask}
            />
          </ListItem>
        ))}
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 250,
  },
  itemValueMask: {
    fontSize: 18,
    fontWeight: '300',
    marginLeft: 30,
    color: '#000',
    opacity: 0.6,
  },
});
