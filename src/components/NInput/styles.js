import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.styles.itemWidth}

  display: flex;
  flex-direction: column;

  .label {
    margin: 0 0 3px 16px;

    color: ${({ theme }) => theme.colors.dark};
  }

  .input {
    padding: 0 25px;

    width: 100%;
    height: 69px;
    border: 1px solid
      ${({ theme, error }) => (error ? '#FA6C6C' : theme.colors.dark)};
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.dark};

    color: ${({ error }) => (error ? '#FA6C6C' : 'white')};

    &::placeholder {
      color: white;
      opacity: 0.7;
    }
  }

  .error {
    margin: 3px 0 0 16px;

    height: ${({ error }) => (error ? '10px' : 0)};

    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
  }
`;
