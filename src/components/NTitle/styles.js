import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  .back-button {
    margin-left: 24px;
    position: absolute;
    left: 0;

    ${({ titleColor }) => titleColor === 'white' && 'color: white;'}
  }

  .forward-button {
    margin-right: 24px;
    position: absolute;
    right: 0;

    ${({ titleColor }) => titleColor === 'white' && 'color: white;'}
  }

  .forward-button-zap {
    margin-right: 24px;
    position: absolute;
    right: 0;

    display: flex;
    align-items: center;

    color: white;
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 30px;
    padding: 2px;
  }

  .label {
    font-size: 24px;
    ${({ titleColor }) => titleColor === 'white' && 'color: white;'}
  }
`;
