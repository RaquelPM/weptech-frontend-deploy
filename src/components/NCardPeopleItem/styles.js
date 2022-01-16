import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.styles.itemWidth}
  height: ${({ hyde }) => (hyde ? 0 : '46px')};
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;

  background: ${({ theme }) => theme.colors.dark};

  overflow: hidden;

  .divLabels {
    display: flex;
    justify-content: center;

    width: calc(100% - 98px);
  }

  .label,
  .labelName,
  .labelMoney {
    color: white;
    font-size: 16px;
    white-space: nowrap;
  }

  .labelName {
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .iconContact {
    position: absolute;
    left: 10px;
    z-index: 10;
  }

  .iconConfirm {
    position: absolute;
    right: ${({ selected }) => (selected ? 'calc(100% - 44px)' : '10px')};
    z-index: 11;

    transition: right 0.3s;
  }
`;

export const Icon = styled.button`
  width: 34px;
  height: 34px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.primary};

  border-radius: 20px;

  background: white;
`;
