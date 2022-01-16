import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { NTitle, NCounter, NTimer, NSmallButton, NButton } from '~/components';
import { useApiEffect } from '~/hooks';
import { addTime, getTimes } from '~/services/times';

import { Container } from './styles';
import NModalHours from './NModalHours';

const Times = () => {
  const [times, setTimes] = useState([]);
  const [time, setTime] = useState('');
  const [spots, setSpots] = useState(0);
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  function sendToWait() {
    if (time && spots) navigate('/aguarde');
    else if (!time) alert('Escolha um horário');
    else if (!spots) alert('Indique a quantidade de vagas');
  }

  useApiEffect(getTimes, response => setTimes(response.data));

  function chosed(actualTime) {
    let is;
    if (actualTime === time) {
      is = true;
    } else {
      is = false;
    }
    return is;
  }

  const timers = times.map(item => (
    <NTimer
      key={item.id}
      label={`${item.time} - R$${item.price}`}
      num={item.people}
      onClick={() => setTime(item.time)}
      chosed={chosed(item.time)}
      vagas={spots}
      className="timer"
    />
  ));

  return (
    <Container>
      <NTitle label="Viagens existentes" className="title" />
      <NCounter
        label="Vagas"
        className="counter"
        value={spots}
        onChange={setSpots}
      />

      {timers}

      <NSmallButton label="Novo" onClick={() => setModal(true)} />
      <NButton
        label="Confirmar vaga"
        className="button"
        onClick={() => sendToWait()}
      />
      <NModalHours
        visible={modal}
        times={times}
        onClose={() => setModal(false)}
        spots={spots}
        onConfirm={chosen => {
          addTime(chosen);
          setModal(false);
        }}
      />
    </Container>
  );
};

export default Times;
