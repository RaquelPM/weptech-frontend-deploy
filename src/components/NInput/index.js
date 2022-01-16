import React, { forwardRef } from 'react';

import InputMask from 'react-input-mask';

import { Container } from './styles';

const Input = forwardRef(({ label, className, error, mask, ...rest }, ref) => (
  <Container className={className} error={error}>
    {label && <p className="label">{label}</p>}
    {!mask && <input className="input" {...rest} ref={ref} />}
    {mask && <InputMask mask={mask} className="input" {...rest} ref={ref} />}
    <p className="error">{error}</p>
  </Container>
));

export default Input;
