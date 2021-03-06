import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;

  opacity: ${({ mouse }) => (mouse ? 0.8 : 1)};

  .option {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: white;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  .icon {
    color: white;
    height: 18px;
    width: 18px;
    margin-right: 12px;
  }
`;
