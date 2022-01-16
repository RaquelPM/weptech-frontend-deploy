import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding: 0 50px 0 50px;

  height: 100vh;
  width: 100vw;

  .title,
  .title_top {
    font-size: 24px;
  }

  .title_top {
    position: absolute;
    top: 50px;
  }

  > .div_info {
    gap: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;

    > .icon_car {
      width: 145px;
    }

    .money {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      .money_value {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 24px;
      }

      .money_icon {
        width: 30px;
      }
    }

    .subtitle {
      font-size: 18px;
      text-align: center;
      padding: 0 10px 40px 10px;
    }
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.styles.itemWidth}
  height: 69px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.dark};
  position: relative;

  margin-top: 5px;

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
