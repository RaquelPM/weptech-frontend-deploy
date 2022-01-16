import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.light_gray};

  display: flex;
  flex-direction: column;
  align-items: center;

  .btn_teste {
    display: none;
  }

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

    margin-top: 50px;
    margin-bottom: 30px;
    padding: 0 20px 0 20px;

    > .title,
    .title_viagens {
      margin-top: 20px;
    }

    > .title_viagens {
      margin-bottom: 20px;
    }

    .div_economy {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .economy_title {
        font-size: 15px;
        margin-bottom: 5px;
      }

      .div_money_time {
        font-size: 18px;
        border-style: dashed;
        border-color: white;
        padding: 15px 25px 15px 25px;
        border-radius: 20px;
      }
    }

    .icon_help {
      color: white;
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
