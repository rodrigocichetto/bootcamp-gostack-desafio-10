import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export const Loader = styled.ActivityIndicator`
  margin-top: 30px;
`;

export const HelpItem = styled.TouchableOpacity`
  background: ${colors.white};
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
`;

export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Status = styled.Text`
  color: ${props => (props.answered ? colors.success : colors.placeholder)};
  font-weight: bold;
  font-size: 16px;
  align-items: center;
`;

export const StatusIcon = styled(Icon).attrs({
  name: 'check-circle',
  size: 14,
})`
  color: ${props => (props.answered ? colors.success : colors.placeholder)};
  margin-right: 20px;
`;

export const Time = styled.Text`
  color: ${colors.text};
`;

export const Description = styled.Text`
  color: ${colors.text};
`;
