import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: 30px;
  padding-top: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Input = styled.input`
  margin-bottom: ${p => p.theme.space.l};
  padding: ${p => p.theme.space.m};
  border-radius: ${p => p.theme.radii.small};
  height: 30px;
  width: 300px;
  color: ${p => p.theme.colors.primaryColor};
  font-family: inherit;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  &:hover,
  &:focus {
    outline: none;
    border: 2px solid ${p => p.theme.colors.accentColor};
  }
`;
export const Button = styled.button`
  padding: ${p => p.theme.space.ml};
  font-size: ${p => p.theme.fontSizes.m};
  border: none;
  border-radius: ${p => p.theme.radii.small};

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.accentColor};
  }
`;
