import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Button from '~/components/Button';
import Input from '~/components/Input';

import { Container, Form } from './styles';

const SignIn = () => {
  return (
    <Container>
      <Image source={logo} />

      <Form>
        <Input
          autoCorret="false"
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
        />

        <Button onPress={() => {}}>Entrar no sistema</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
