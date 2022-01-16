import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 100;

  min-height: 100%;
  min-width: 100%;

  background-color: rgba(10, 23, 55, 0.5);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  .spinner-box {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  @keyframes pulse {
    from {
      opacity: 1;
      transform: scale(1.25);
    }
    to {
      opacity: 0.75;
      transform: scale(0.75);
    }
  }

  .pulse-container {
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pulse-bubble {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .pulse-bubble-1 {
    animation: pulse 1s ease 0s infinite alternate;
  }
  .pulse-bubble-2 {
    animation: pulse 1s ease 0.4s infinite alternate;
  }
  .pulse-bubble-3 {
    animation: pulse 1s ease 0.6s infinite alternate;
  }
`;
