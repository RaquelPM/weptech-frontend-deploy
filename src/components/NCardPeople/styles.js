import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 0 11px;

  ${({ theme }) => theme.styles.cardWidth}

  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;

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

    .label,
    .labelAdress {
      overflow: hidden;
    }

    .labelAdress {
      font-size: 14px;
      margin-top: 2px;
      color: ${({ theme }) => theme.colors.gray};
    }

    width: 100%;
    margin-bottom: 15px;
    margin-top: 5px;
    padding: 0px 0px 0px 40px;
  }

  > .peopleDiv {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 11px;
  }
`;
