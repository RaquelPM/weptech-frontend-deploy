import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.styles.itemWidth}
  height: ${({ small }) => (small ? '32px' : '46px')};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;

  background: ${({ theme }) => theme.colors.dark};

  > .label {
    color: white;
    font-size: 16px;
    overflow: hidden;
    max-height: 18px;
    max-width: calc(100% - 30px);
  }
`;
