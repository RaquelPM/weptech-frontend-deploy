import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 0 72px;

  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.light_gray};

  display: flex;
  flex-direction: column;
  align-items: center;

  > .wrapper {
    margin-bottom: 45px;

    display: flex;
    flex-direction: column;
    z-index: 10;
    align-items: center;

    flex: 1;

    > .info {
      margin: 35px 0 40px;

      color: white;
      font-size: 24px;
    }

    > .embarkations-div {
      display: flex;
      flex-direction: column;

      gap: 24px;
    }
  }
`;
