import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: all 0.3s;

    font: 400 16px Comfortaa, sans-serif;
  }

  h1, h2, p, label, button, a {
    color: ${({ theme }) => theme.colors.dark};
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    outline: none;
    -webkit-tap-highlight-color: transparent;

    transition: opacity .2s;

    &:active {
      opacity: 0.7;
    }
  }

  fieldset {
    border: 0;
  }

  input {
    outline: none;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms;

  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;
