import styled from 'styled-components';

export const Container = styled.div`
  padding: 51px 0 66px;

  width: 100vw;
  min-height: 100vh;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  > .price-div {
    margin: 36px 0 31px;

    display: flex;
    align-items: center;

    p {
      width: 50vw;

      text-align: center;
      font-size: 24px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  > .waiting {
    text-align: center;
    max-width: 80vw;
  }

  > .localize-button,
  > .waiting {
    margin: 40px 0 16px;
  }

  > .info-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: auto 0;

    p {
      text-align: center;
    }

    .main {
      max-width: 90vw;

      font-size: 24px;
    }

    .center {
      margin: 12px 0;

      max-width: 70vw;

      font-size: 18px;
    }
  }
`;

export const ButtonCash = styled.button`
  border: ${({ selected, theme }) =>
    selected ? `2px dashed ${theme.colors.primary}` : ''};
  border-radius: 5px;
  padding: ${({ selected }) =>
    selected ? '5px 5px 2px 5px' : '7px 7px 4px 7px'};
`;

export const DriverWrapper = styled.div`
  margin-top: 40px;

  height: ${({ open }) => (open ? 210 : 0)}px;
  ${({ open }) => !open && 'overflow: hidden;'}

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: height 1s;

  .driver-photo {
    margin-bottom: 40px;

    width: 110px;
    min-height: 110px;
    border-radius: 100px;

    background: ${({ theme }) => theme.colors.gray};
  }

  p {
    font-size: 18px;
  }
`;
