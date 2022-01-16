import React from 'react';

import { Container } from './styles';

const NCounter = ({
  label = '',
  value = 0,
  min = 0,
  max = 99,
  onChange = () => null,
  ...rest
}) => (
  <Container {...rest}>
    <button
      className="button ripple"
      type="button"
      onClick={value > min ? () => onChange(value - 1) : undefined}
    >
      -
    </button>
    <div className="wrapper">
      <p className="label">{label}</p>
      <p className="counter">{value}</p>
    </div>
    <button
      className="button"
      type="button"
      onClick={value < max ? () => onChange(value + 1) : undefined}
    >
      +
    </button>
  </Container>
);

export default NCounter;
