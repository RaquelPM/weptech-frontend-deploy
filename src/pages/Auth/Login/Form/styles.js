import styled from 'styled-components';

export const Container = styled.form`
  padding: 25px 0 45px;

  ${({ theme }) => theme.styles.cardWidth}
  border-radius: 20px;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  > .button {
    margin: 20px 0;
  }

  > a {
    color: #2998ff;
  }
`;
