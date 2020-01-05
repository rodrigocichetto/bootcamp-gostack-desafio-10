import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Loader } from './styles';

import { signOut } from '~/store/modules/auth/actions';

const SignOut = ({ navigation }) => {
  const dispatch = useDispatch();

  useState(() => dispatch(signOut(navigation)), []);

  return (
    <Container>
      <Loader />
    </Container>
  );
};

SignOut.navigationOptions = {
  tabBarLabel: 'Sair',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="exit-to-app" size={20} color={tintColor} />
  ),
};

export default SignOut;
