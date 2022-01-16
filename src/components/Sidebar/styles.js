import styled from 'styled-components';

export const Container = styled.div`
  > .icon {
    color: white;
  }
`;

export const Sidbar = styled.div`
  position: fixed;
  padding-top: 100px;
  padding-left: ${({ close }) => (close ? '20px' : '0px')};
  top: 0px;
  left: 0px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  width: ${({ close }) => (close ? '210px' : '0px')};
  overflow: hidden;

  z-index: 100;

  .option {
    margin-bottom: 20px;
  }
`;

export const Sombra = styled.div`
  width: ${({ close }) => (close ? '100vw' : '0px')};
  height: 100%;
  min-height: 100vh;

  transition: all 0s !important;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 90;

  background: black;

  opacity: 0.3;
`;
