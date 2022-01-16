import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .title {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 60px;
    margin-bottom: 10px;
  }
  > .btn {
    margin-top: 40px;
  }

  .flag_right,
  .flag_left {
    position: fixed;
  }

  .flag_right {
    right: 0;
    margin-top: 190px;
  }

  .flag_left {
    left: 0;
    padding-bottom: 400px;
  }
`;
