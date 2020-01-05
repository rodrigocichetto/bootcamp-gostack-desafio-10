import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import formatRelative from 'date-fns/formatRelative';
import { pt } from 'date-fns/locale';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { NavigationEvents } from 'react-navigation';

import api from '~/services/api';

import {
  Container,
  List,
  Button,
  Loader,
  HelpItem,
  Header,
  Status,
  StatusIcon,
  Time,
  Description,
} from './styles';

const HelpOrder = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [helps, setHelps] = useState([]);
  const { id } = useSelector(state => state.user.profile);

  useEffect(() => {
    async function loadHelps() {
      try {
        setLoading(true);
        const response = await api.get(`/students/${id}/help-orders`, {
          params: { page },
        });

        setHelps(
          response.data.help_orders.map(help => ({
            ...help,
            createdAt: formatRelative(new Date(help.createdAt), new Date(), {
              locale: pt,
            }),
          }))
        );
        setLoading(false);
      } catch (e) {
        Alert.alert('Falha', 'Houve um erro ao buscar os pedidos de ajuda');
      }
    }
    loadHelps();
  }, [id, page]);

  const updateHelps = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/students/${id}/help-orders`, {
        params: { page },
      });

      setHelps(
        response.data.help_orders.map(help => ({
          ...help,
          createdAt: formatRelative(new Date(help.createdAt), new Date(), {
            locale: pt,
          }),
        }))
      );
      setLoading(false);
    } catch (e) {
      Alert.alert('Falha', 'Houve um erro ao buscar os pedidos de ajuda');
    }
  };

  const handleAddHelp = () => navigation.navigate('HelpOrderForm');

  const handleShowHelp = help =>
    navigation.navigate('HelpOrderShow', { data: { help } });

  return (
    <Container>
      <NavigationEvents onWillFocus={() => updateHelps()} />
      <Button onPress={handleAddHelp}>Novo pedido de auxílio</Button>
      {loading && <Loader />}
      <List
        data={helps}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <HelpItem onPress={() => handleShowHelp(item)}>
            <Header>
              <Status answered={item.answer}>
                <StatusIcon answered={item.answer} />{' '}
                {item.answer ? 'Respondido' : 'Sem resposta'}
              </Status>
              <Time>{item.createdAt}</Time>
            </Header>

            <Description>{item.question}</Description>
          </HelpItem>
        )}
      />
    </Container>
  );
};

HelpOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

HelpOrder.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="help" size={20} color={tintColor} />
  ),
};

export default HelpOrder;
