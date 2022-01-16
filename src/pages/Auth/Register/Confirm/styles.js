import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  > .title {
    margin: 51px 0 20px;
  }

  > .value {
    margin: 10px 0;

    font-weight: 700;
  }

  .input-container {
    margin-top: 32px;

    ${({ theme }) => theme.styles.itemWidth}

    display: flex;
    justify-content: space-between;

    .input {
      background: ${({ theme }) => theme.colors.dark};
      border-radius: 16px;
      border: 0px transparent;

      color: white;
      font: 400 30px Comfortaa, sans-serif;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .input-selected {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  > .button {
    margin: auto 0 15%;
  }
`;
