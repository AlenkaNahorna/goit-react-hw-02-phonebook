import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ContactsListItem = styled.li`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.space.m};
  margin-bottom: ${p => p.theme.space.ml};
`;

export const ContactsListText = styled.p`
  margin: 0 ${p => p.theme.space.l};
`;

export const ContactsButton = styled.button`
  padding: ${p => p.theme.space.s};
  font-size: ${p => p.theme.fontSizes.s};
  border: none;
  border-radius: ${p => p.theme.radii.small};

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.accentColor};
  }
`;
