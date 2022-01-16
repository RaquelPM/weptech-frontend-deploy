import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  > .submit-button {
    margin: 28px 0 23px;
  }

  > .div_pic {
    ${({ theme }) => theme.styles.itemWidth}

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 10px 0 10px;
  }
`;
