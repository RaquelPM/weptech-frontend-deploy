import styled from 'styled-components';

export const Container = styled.div`
  margin: 32px 0 33px;

  width: calc(100vw - 104px);
  max-width: 488px;

  display: flex;
  justify-content: space-between;

  > button:active {
    opacity: 1;
  }
`;
