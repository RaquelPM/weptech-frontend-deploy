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

    width: 100vw;

    margin-top: 50px;
    margin-bottom: 30px;
    padding: 0 20px 0 20px;

    > .title {
      margin-top: 20px;
    }
  }

  .card {
    z-index: 5;
    margin-bottom: 25px;
  }

  .nsearch {
    margin-bottom: 25px;
  }
`;
