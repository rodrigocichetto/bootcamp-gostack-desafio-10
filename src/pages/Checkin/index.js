import React, { useState, useEffect } from 'react';
import { Alert, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { formatRelative } from 'date-fns';
import { pt } from 'date-fns/locale';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/logo-header.png';

import api from '~/services/api';

import {
  Container,
  CheckinItem,
  Title,
  Description,
  List,
  Button,
  Loader,
} from './styles';

const Checkin = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [checkins, setCheckins] = useState([]);
  const { id } = useSelector(state => state.user.profile);

  useEffect(() => {
    async function loadCheckins() {
      try {
        setLoading(true);
        const response = await api.get(`/students/${id}/checkins`, {
          params: { page },
        });

        setCheckins(
          response.data.checkins.map((checkin, index) => ({
            ...checkin,
            number: response.data.total - index * page,
            createdAt: formatRelative(new Date(checkin.createdAt), new Date(), {
              locale: pt,
            }),
          }))
        );
        setLoading(false);
      } catch (e) {
        Alert.alert('Falha', 'Houve um erro ao buscar os check-ins');
      }
    }
    loadCheckins();
  }, [id, page]);

  const handleAddCheckin = async () => {
    try {
      await api.post(`/students/${id}/checkins`);
    } catch (e) {
      Alert.alert('Falha', 'Houve um erro ao tentar realizar o check-in');
    }
  };

  return (
    <Container>
      <Button loading={buttonLoading} onPress={handleAddCheckin}>
        Novo check-in
      </Button>
      {loading && <Loader />}
      <List
        data={checkins}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CheckinItem>
            <Title>Check-in #{item.number}</Title>
            <Description>{item.createdAt}</Description>
          </CheckinItem>
        )}
      />
    </Container>
  );
};

Checkin.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="location-on" size={20} color={tintColor} />
  ),
  header: <Image source={logo} />,
};

export default Checkin;
