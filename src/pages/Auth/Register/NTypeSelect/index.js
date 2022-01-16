import React, { forwardRef } from 'react';

import { NSmallButton } from '~/components';

import { Container } from './styles';

const NTypeSelect = forwardRef(({ value, onChange = () => null }, ref) => (
  <Container ref={ref}>
    <NSmallButton
      label="Passageiro"
      selected={value === 'passenger'}
      onClick={() => onChange('passenger')}
    />
    <NSmallButton
      label="Motorista"
      selected={value === 'driver'}
      onClick={() => onChange('driver')}
    />
  </Container>
));

export default NTypeSelect;
