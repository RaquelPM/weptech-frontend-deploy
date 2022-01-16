import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.light_gray};

  display: flex;
  flex-direction: column;
  align-items: center;

  .div_top {
    display: flex;
    flex-direction: row;
    z-index: 10;
    justify-content: space-between;
    align-items: center;

    p {
      color: white;
    }
    width: 100vw;

    margin-top: 80px;
    margin-bottom: 60px;
    padding: 0 20px 0 20px;
  }

  .card {
    z-index: 10;
    margin-bottom: 20px;
  }
`;
