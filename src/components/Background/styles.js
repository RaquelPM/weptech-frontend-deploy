import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 300px;

  background: ${({ theme }) => theme.colors.primary};

  position: absolute;
  top: 0;

  z-index: 0;
`;
