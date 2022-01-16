import React from 'react';

import { Container } from './styles';

const NCardItem = ({ label, small, ...rest }) => (
  <Container small={small} {...rest}>
    {label && <p className="label">{label}</p>}
  </Container>
);

export default NCardItem;
