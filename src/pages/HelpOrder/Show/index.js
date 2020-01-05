import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  HelpItem,
  Header,
  Time,
  Title,
  Description,
} from './styles';

const HelpOrderShow = ({ navigation }) => {
  // const [help, setHelp] = useState({});
  const { help } = navigation.state.params.data;

  return (
    <Container>
      <HelpItem>
        <Header>
          <Title>PERGUNTA</Title>
          <Time>{help.createdAt}</Time>
        </Header>
        <Description>{help.question}</Description>
        <Title>RESPOSTA</Title>
        <Description>{help.answer}</Description>
      </HelpItem>
    </Container>
  );
};

HelpOrderShow.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        data: PropTypes.shape({
          help: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

HelpOrderShow.navigationOptions = {
  headerBackTitle: 'Pedidos',
};

export default HelpOrderShow;
