import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cardIcon from '~/assets/icons/card.svg';
import moneyIcon from '~/assets/icons/money.svg';

import { NButton, NTitle } from '~/components';

import { Container, DriverWrapper, ButtonCash } from './styles';

const Waiting = () => {
  const [open, setOpen] = useState(false);
  const [payment, setPayment] = useState('cash');
  const [label, setLabel] = useState('Viagem agendada');
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('click', () => {
      setOpen(true);
      setLabel('Motorista confirmado');
    });
  }, []);

  return (
    <Container>
      <NTitle label={label} className="NTitle" zap={open} />
      <div className="price-div">
        <ButtonCash
          type="button"
          selected={payment === 'cash'}
          onClick={() => setPayment('cash')}
        >
          <img src={moneyIcon} alt="money" />
        </ButtonCash>

        <p>R$ 5,00</p>

        <ButtonCash
          type="button"
          selected={payment === 'card'}
          onClick={() => setPayment('card')}
        >
          <img src={cardIcon} alt="card" />
        </ButtonCash>
      </div>
      <div className="info-div">
        <p className="main">Embarque: Padaria Líder</p>
        <p className="center"> Rua Pedro de Jesus, 45, honorio Bicalho</p>
        <p className="main">Às 09:00</p>
      </div>
      <DriverWrapper open={open}>
        <div className="driver-photo" />
        <p>Roberto Carlos Miranda</p>
        <p>Fiat Mobi Preto</p>
        <p>GQE-7898</p>
      </DriverWrapper>
      {!open && (
        <p className="waiting">
          Enviaremos as informaçõs do seu motorista em breve.
        </p>
      )}
      {open && (
        <NButton
          label="Localização"
          className="localize-button"
          onClick={() => navigate('/viagem')}
        />
      )}
      <NButton color="red" label="CANCELAR" />
    </Container>
  );
};

export default Waiting;
