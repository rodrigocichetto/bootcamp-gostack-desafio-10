import styled from 'styled-components/native';

import InputComponent from '~/components/Input';
import ButtonComponent from '~/components/Button';

import colors from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.signedBackground};
`;

export const Form = styled.View`
  margin: 20px 30px 0;
`;

export const Input = styled(InputComponent).attrs({
  height: 300,
})`
  background: ${colors.white};
  height: 300px;
  align-items: flex-start;
  padding-top: 10px;
`;

export const Button = styled(ButtonComponent)`
  margin: 20px 0;
`;
