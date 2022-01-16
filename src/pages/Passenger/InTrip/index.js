import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MdContentCopy } from 'react-icons/md';

import { Container, Wrapper } from './styles';

import car from '../../../assets/icons/car.svg';
import money from '../../../assets/icons/money.svg';

const InTrip = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/sucesso')}>
      <p className="title_top">Vá com Deus!</p>
      <div className="div_info">
        <img src={car} alt="carro" className="icon_car" />
        <p className="title">Você está em viagem.</p>
        <div className="money">
          <img src={money} alt="money" className="money_icon" />
          <p className="money_value">R$ 5,00</p>
          <img src={money} alt="money" className="money_icon" />
        </div>
        <p className="subtitle">Não perca tempo. Pague agora!</p>
      </div>
      <p>Chave pix do motorista</p>
      <Wrapper className="wrapper">
        <p className="content">AndyGarcia@gmail.com</p>
        <MdContentCopy size={25} className="icon" />
      </Wrapper>
    </Container>
  );
};

export default InTrip;
