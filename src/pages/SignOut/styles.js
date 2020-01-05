import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.signedBackground};
`;

export const Loader = styled.ActivityIndicator`
  margin-top: 100px;
`;
