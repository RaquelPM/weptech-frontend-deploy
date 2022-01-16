import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.primary};
  p {
    color: white;
  }

  > .icon_bg {
    color: ${({ theme }) => theme.colors.primary};
    background: white;
    width: 125px;
    height: 120px;
    border-radius: 100px;

    padding-top: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > .title {
    font-weight: bold;
    margin: 40px 0 10px 0;
  }

  > .subtitle {
    font-size: 14px;
    text-align: center;
    width: 400px;
    margin-bottom: 40px;

    color: ${({ theme }) => theme.colors.light_gray};
  }
`;
