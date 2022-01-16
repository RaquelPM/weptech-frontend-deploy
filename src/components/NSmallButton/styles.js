import styled from 'styled-components';

export const Container = styled.button`
  position: relative;

  width: 115px;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ selected, buttonColor, theme }) => {
    if (selected) {
      return theme.colors.gray;
    }

    return buttonColor === 'white' ? 'white' : theme.colors.primary;
  }};

  font-weight: 700;
  color: ${({ selected, buttonColor, theme }) => {
    if (selected) {
      return '#474747';
    }

    return buttonColor === 'white' ? theme.colors.primary : 'white';
  }};

  ${({ selected }) =>
    selected && 'filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));'}

  .circle {
    position: absolute;
    left: -16px;
    top: 19px;

    width: 12px;
    height: 12px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: ${({ selected }) => (selected ? 1 : 0)};
  }
`;
