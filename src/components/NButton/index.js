import React from 'react';

import { Container } from './styles';

const NButton = ({ label = '', color, ...rest }) => (
  <Container type="button" buttonColor={color} {...rest}>
    {label}
  </Container>
);

export default NButton;
