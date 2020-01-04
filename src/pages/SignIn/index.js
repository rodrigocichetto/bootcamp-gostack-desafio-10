import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import Button from '~/components/Button';
import Input from '~/components/Input';
import { Container, Form } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

const SignIn = () => {
  const dispatch = useDispatch();
  const [student, setStudent] = useState('');
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = () => dispatch(signInRequest(student));

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <Input
          autoCorret="false"
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          onSubmitEdition={handleSubmit}
          value={student}
          onChangeText={setStudent}
        />

        <Button loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
