import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdContentCopy } from 'react-icons/md';

import moneyIcon from '~/assets/icons/money.svg';

import { NButton } from '~/components';

import { Container, Wrapper } from './styles';

const Success = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <p className="title">Ai sim, em..</p>
      <p className="subtitle">Você chegou ao seu destino e economizou bem!</p>

      <div className="money_div">
        <img className="icon" src={moneyIcon} alt="money" />
        <p className="money_label">R$ 5,00</p>
      </div>

      <p className="subtitle">Pague ao seu motorista!</p>

      <p>Chave pix do motorista</p>
      <Wrapper className="wrapper">
        <p className="content">AndyGarcia@gmail.com</p>
        <MdContentCopy size={25} className="icon" />
      </Wrapper>
      <NButton label="Agendar volta" onClick={() => navigate('/')} />
    </Container>
  );
};

export default Success;
