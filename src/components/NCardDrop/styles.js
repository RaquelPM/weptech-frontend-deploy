import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.styles.cardWidth}
  height:${({ adress }) => (adress ? '114px' : '80px')};

  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 15px;

  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  background: white;

  color: ${({ theme }) => theme.colors.dark};

  > .nameContainer {
    display: flex;
    justify-content: start;
    align-items: center;

    .icon {
      height: 25px;
      width: 25px;
      margin-right: 10px;
    }

    .label {
      overflow: hidden;
      max-width: calc(100% - 50px);
      max-height: 37px;
    }

    width: 100%;

    padding: 0px 0px 0px 40px;
  }
`;
