import React from 'react';
import { BiTime } from 'react-icons/bi';

import { Container, Circle } from './styles';

const NTimer = ({ label = '', num = 1, chosed, vagas, ...rest }) => (
  <Container {...rest} chosed={chosed}>
    <BiTime size={24} />
    <p className="label">{label}</p>
    <Circle opacity={num !== undefined ? 1 : 0}>
      {chosed && <p>{num + vagas}</p>}
      {!chosed && <p>{num}</p>}
    </Circle>
  </Container>
);

export default NTimer;
