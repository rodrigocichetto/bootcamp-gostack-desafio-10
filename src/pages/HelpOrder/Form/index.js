import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container, Form, Input, Button } from './styles';

const HelpOrderForm = ({ navigation }) => {
  const [help, setHelp] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useSelector(state => state.user.profile);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await api.post(`/students/${id}/help-orders`, {
        student_id: id,
        question: help,
      });
      Alert.alert('Sucesso', 'Pedido de ajuda cadastrado com sucesso');
      setHelp('');
      navigation.navigate('HelpOrder');
    } catch (err) {
      Alert.alert(
        'Falha',
        'Houve um erro ao tentar cadastrar pedidos de ajuda'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form>
        <Input
          autoCorret="false"
          autoCapitalize="none"
          placeholder="Inclua seu pedido de auxílio"
          returnKeyType="send"
          multiline
          numberOfLines={5}
          onSubmitEdition={handleSubmit}
          value={help}
          onChangeText={setHelp}
        />
        <Button loading={loading} onPress={handleSubmit}>
          Novo pedido de auxílio
        </Button>
      </Form>
    </Container>
  );
};

HelpOrderForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

HelpOrderForm.navigationOptions = {
  headerBackTitle: 'Pedidos',
};

export default HelpOrderForm;
