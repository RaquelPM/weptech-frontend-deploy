import React, { useState } from 'react';

import { NButton, NTimer } from '~/components';

import { Container, Wrapper } from './styles';

const NModalHours = ({
  visible,
  onConfirm = () => null,
  onClose = () => null,
  spots,
  times = [],
  ...rest
}) => {
  const [time, setTime] = useState({});

  function chosed(actualTime) {
    let is;
    if (actualTime === time) {
      is = true;
    } else {
      is = false;
    }
    return is;
  }

  const timers = times.map((item, index) => (
    <NTimer
      key={index}
      label={`${item.time} - R$${item.price}`}
      num={item.people}
      chosed={chosed(item)}
      onClick={() => setTime(item)}
      vagas={spots}
      className="timer"
    />
  ));

  return (
    <Container visible={visible} {...rest} onClose={onClose}>
      <p className="label">Selecione um novo horário</p>
      <Wrapper className="timers_div">{timers}</Wrapper>
      <NButton
        className="confirm-button"
        color="primary"
        onClick={() => onConfirm(time)}
        label="Confirmar"
      />
    </Container>
  );
};

export default NModalHours;
