import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    margin: 24px 0 13px;

    color: white;
  }

  > .teste {
    display: flex;
    justify-content: space-between;
    width: 300px;
    position: absolute;
    top: 30px;
  }
`;

export const Logo = styled.img`
  margin-bottom: 40px;
`;
