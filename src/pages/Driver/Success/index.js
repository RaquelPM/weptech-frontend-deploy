import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NButton } from '~/components';

import { Container } from './styles';

import flagLeft from '../../../assets/icons/flag_left.svg';
import flagRight from '../../../assets/icons/flag_right.svg';

const Success = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={flagLeft} alt="bandeira" className="flag_left" />
      <img src={flagRight} alt="bandeira" className="flag_right" />
      <p className="title">Parabéns.</p>
      <p>Sua viagem foi finalizada com sucesso. :)</p>
      <p>Bom trabalho motorista!</p>
      <NButton
        label="Vamos finalizar mais!"
        className="btn"
        onClick={() => navigate('/')}
      />
    </Container>
  );
};

export default Success;
