import styled from '@emotion/styled';

export const Title = styled.h1`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xxl};
  margin-bottom: 10px;
  color: ${p => p.theme.colors.accentColor};
`;

export const SubTitle = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  margin-bottom: 20px;
  color: ${p => p.theme.colors.accentColor};
`;
