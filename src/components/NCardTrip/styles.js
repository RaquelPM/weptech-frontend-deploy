import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.styles.cardWidth}
  height: 146px;

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
      height: 40px;
      width: 40px;
    }

    .label {
      overflow: hidden;
      margin-top: 5px;
      margin-left: 20px;
      margin-right: 20px;
    }

    width: 100%;
    margin-bottom: 15px;
    margin-top: 5px;
    padding: 0px 0px 0px 25px;
  }
`;
