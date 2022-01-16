import styled from 'styled-components';

export const Container = styled.div`
  padding: 19px 0 0;

  ${({ theme }) => theme.styles.cardWidth}
  border-radius: 20px;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;

  > .header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    .title {
      flex: 1;

      text-align: center;

      margin-right: 5px;

      color: black;
      font-size: 15px;
    }

    .icon {
      margin-left: 15px;
    }
  }

  > .label {
    margin: 13px 0 14px;

    max-width: 90%;

    color: black;
    font-size: 13px;
  }
`;

export const Button = styled.button`
  margin-right: 15px;

  width: 20px;
  height: 20px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.primary};

  .horizontal,
  .vertical {
    position: absolute;

    border-radius: 10000px;
    background: white;
  }

  .horizontal {
    top: 9px;
    left: 4px;

    width: 12px;
    height: 2px;
    border-radius: 2000px;
  }

  .vertical {
    top: ${({ open }) => (open ? '9px' : '4px')};
    left: 9px;

    width: 2px;
    height: ${({ open }) => (open ? 0 : '12px')};
  }
`;

export const PassengersList = styled.div`
  padding: 0 15px;

  width: 100%;
  height: ${({ open, qt }) => (open ? `${59 * qt + 17}px` : 0)};
  overflow: hidden;

  > .street-div {
    margin: 7px 0 5px;

    display: flex;
    align-items: center;

    .icon {
      width: 15px;
      height: 15px;
    }

    .place {
      margin-left: 7px;

      color: #4d4d4d;
      font-size: 13px;
    }
  }
`;
