import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import colors from '~/styles/colors';

import { Container, Text } from './styles';

const Button = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
