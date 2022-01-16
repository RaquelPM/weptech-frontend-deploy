import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > .title {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 40px;
    margin-bottom: 60px;
  }

  .subtitle {
    font-size: 24px;
    text-align: center;
    margin-bottom: 30px;
  }

  .money_div {
    display: flex;
    align-items: center;
    margin: 70px 0 20px 0;

    > .icon {
      width: 50px;
      margin-right: 10px;
    }

    > .money_label {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 32px;
    }
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.styles.itemWidth}
  height: 69px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.dark};
  position: relative;

  margin: 5px 0 80px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    font-size: 16px;
    color: white;
  }

  > .icon {
    position: absolute;
    right: 20px;
    color: white;
  }
`;
