import styled from 'styled-components/native';

import colors from '~/styles/colors';

import ButtonComponent from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.signedBackground};
`;

export const Button = styled(ButtonComponent)`
  margin: 20px 30px 0;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const CheckinItem = styled.View`
  background: ${colors.white};
  padding: 15px 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: ${colors.bold};
`;

export const Description = styled.Text`
  color: ${colors.text};
`;

export const Loader = styled.ActivityIndicator`
  margin-top: 30px;
`;
