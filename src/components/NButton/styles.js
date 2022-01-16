import styled from 'styled-components';

export const Container = styled.button`
  width: 234px;
  height: 50px;
  border-radius: 10px;
  background: ${({ theme, buttonColor }) => [
    buttonColor === 'white' ? 'white' : ``,
    buttonColor === 'red' ? `${theme.colors.red}` : '',
    buttonColor !== 'white' && buttonColor !== 'red'
      ? `${theme.colors.primary}`
      : '',
  ]};
  color: ${({ theme, buttonColor }) =>
    buttonColor === 'white' ? `${theme.colors.primary}` : 'white'};
  font-weight: 700;
`;
