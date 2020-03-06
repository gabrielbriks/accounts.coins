import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';

import CardExpense from '../../components/CardExpenses';
import CardIncomes from '../../components/CardIncomes';
import valiadateAuth from '../../utils/validateAuthentication';
import {
  ContainerBtn,
  BackgroundBtnAdd,
  Container,
  BackgroundAvatarIcon,
  MainHeader,
  ContainerBtnModal,
  BackgroundBtnAddModal,
  ContainerBtnModalOptionsExpenses,
  ContainerBtnModalIncomes,
  TextOptionExpense,
  TextOptionIncome,
} from './styles';

export default function Main({ navigation }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // console.log(navigation.state.params);
  async function showExpenses() {
    const isAutenticated = valiadateAuth();

    if (!isAutenticated.sucess) {
      alert(isAutenticated.error);
      return navigation.navigate('Login');
    }

    navigation.navigate('Expenses');
  }

  async function showIncomes() {
    const isAutenticated = valiadateAuth();

    if (!isAutenticated.sucess) {
      alert(isAutenticated.error);
      return navigation.navigate('Login');
    }

    navigation.navigate('Incomes');
  }

  return (
    <>
      <Container>
        <StatusBar hidden={false} />
        <MainHeader>
          <TouchableOpacity>
            <BackgroundAvatarIcon>
              <Icon name="account-circle" size={65} color={'#343434'} />
            </BackgroundAvatarIcon>
          </TouchableOpacity>
        </MainHeader>

        <TouchableOpacity onPress={showExpenses}>
          <CardExpense newRegister={navigation.state.params} />
        </TouchableOpacity>

        <TouchableOpacity onPress={showIncomes} style={{ marginBottom: 70 }}>
          <CardIncomes newRegister={navigation.state.params} />
        </TouchableOpacity>

        <Modal isVisible={modalIsVisible}>
          <View style={styles.viewModal}>
            <ContainerBtnModal>
              <BackgroundBtnAddModal>
                <Button
                  icon={<Ionicons name="ios-close" size={30} color="white" />}
                  buttonStyle={{ borderRadius: 100, backgroundColor: '#000' }}
                  onPress={() => setModalIsVisible(false)}
                />
              </BackgroundBtnAddModal>
            </ContainerBtnModal>

            <View>
              <TextOptionExpense>Adicionar despesa</TextOptionExpense>
              <TextOptionIncome>Adicionar Receita</TextOptionIncome>
            </View>

            <ContainerBtnModalOptionsExpenses>
              <BackgroundBtnAddModal>
                <Button
                  icon={<Ionicons name="ios-add" size={30} color="white" />}
                  buttonStyle={{ borderRadius: 100, backgroundColor: '#000' }}
                  onPress={() => {
                    navigation.navigate('RegisterExpenses');
                    setModalIsVisible(false);
                  }}
                />
              </BackgroundBtnAddModal>
            </ContainerBtnModalOptionsExpenses>

            <ContainerBtnModalIncomes>
              <BackgroundBtnAddModal>
                <Button
                  icon={<Ionicons name="ios-add" size={30} color="white" />}
                  buttonStyle={{ borderRadius: 100, backgroundColor: '#000' }}
                  onPress={() => {
                    navigation.navigate('RegisterIncomes');
                    setModalIsVisible(false);
                  }}
                />
              </BackgroundBtnAddModal>
            </ContainerBtnModalIncomes>
          </View>
        </Modal>
      </Container>

      <ContainerBtn>
        <BackgroundBtnAdd>
          <Button
            icon={<Ionicons name="ios-add" size={35} color="white" />}
            buttonStyle={{ borderRadius: 100, backgroundColor: '#333' }}
            color="#333"
            onPress={() => setModalIsVisible(true)}
          />
        </BackgroundBtnAdd>
      </ContainerBtn>
    </>
  );
}

const styles = StyleSheet.create({
  viewModal: {
    flex: 1,
    backgroundColor: '#fff',
    opacity: 0.8,
  },
  buttonModal: {
    borderRadius: 100,
  },
});
