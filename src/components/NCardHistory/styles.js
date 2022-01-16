import styled from 'styled-components';

export const Container = styled.div`
  padding: 19px 0 11px;

  ${({ theme }) => theme.styles.cardWidth}
  border-radius: 20px;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: grid;
  grid-template-columns: 1fr 60px;
  grid-row-gap: 5px;

  justify-content: center;

  > .title {
    grid-column: 1 / 3;

    margin-bottom: 12px;

    text-align: center;

    font-size: 15px;
    color: black;
  }

  > .places,
  > .origin-street,
  > .destiny-street {
    grid-column: 1 / 2;

    margin-left: 16px;

    font-size: 13px;
  }

  > .places {
    color: black;
  }

  > .icon {
    grid-column: 2 / 3;
    grid-row: 2 / 5;

    margin: 8px 0 0 5px;
  }

  > .item-div {
    grid-column: 1 / 3;

    display: flex;
    justify-content: center;
  }
`;
