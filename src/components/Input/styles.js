import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  border: 1px solid ${colors.inputBorder};
  border-radius: 4px;
  margin: 5px 0;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.placeholder,
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
`;
