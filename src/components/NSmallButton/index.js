import React from 'react';

import { Container } from './styles';

const NSmallButton = ({ selected, label = '', color, ...rest }) => (
  <Container type="button" selected={selected} buttonColor={color} {...rest}>
    <div className="circle" />
    {label}
  </Container>
);

export default NSmallButton;
