import React from 'react';
import { ThemeProvider } from 'styled-components';

import Global from './global';
import theme from './theme';

const Styles = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    {children}
  </ThemeProvider>
);

export default Styles;
