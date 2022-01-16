import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 23px;

  .button {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 40px;
  }

  .wrapper {
    padding: 8px 15px 4px;

    border-radius: 20px;
    box-shadow: 0px 0.86386px 3.45544px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.colors.dark};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 5px;

    p {
      color: white;
    }

    .label {
      font-size: 15px;
    }

    .counter {
      font-size: 20px;
    }
  }
`;
