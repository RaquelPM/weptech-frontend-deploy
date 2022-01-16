import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 25px;
  border: ${({ chosed }) => (chosed ? '2px solid' : '0px')};
  border-color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.styles.itemWidth}
  height: 69px;
  min-height: 69px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.dark};

  display: flex;
  align-items: center;

  color: white;

  .label {
    flex: 1;

    margin-left: 6px;

    text-align: center;

    color: white;
    font-size: 20px;
  }
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background: white;

  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    text-align: center;

    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
  }
`;
