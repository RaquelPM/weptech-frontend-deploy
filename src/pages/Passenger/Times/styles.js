import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  > .title {
    margin-top: 45px;
    margin-bottom: 20px;
  }

  > .timer {
    margin-bottom: 25px;
  }

  > .counter {
    margin-bottom: 20px;
  }

  > .button {
    margin-top: 25px;
  }
`;
