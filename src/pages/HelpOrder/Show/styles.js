import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.signedBackground};
`;

export const HelpItem = styled.TouchableOpacity`
  background: ${colors.white};
  padding: 20px;
  margin: 20px 30px;
  border-radius: 4px;
`;

export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: ${colors.bold};
`;

export const Time = styled.Text`
  color: ${colors.text};
`;

export const Description = styled.Text`
  color: ${colors.text};
  margin: 16px 0;
`;
