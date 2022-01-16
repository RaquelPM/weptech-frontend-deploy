import React from 'react';

import { BsCheckLg } from 'react-icons/bs';

import { NButton } from '~/components';

import { Container } from './styles';

const Success = ({ redirect = () => null }) => (
  <Container>
    <div className="icon_bg">
      <BsCheckLg size={70} />
    </div>

    <p className="title">Validamos sua identidade</p>
    <p className="subtitle">
      Seu telefone e informações estão corretos. Agora, você está pronto pra
      iniciar suas viagens.
    </p>

    <NButton label="Ok, entendi" onClick={redirect} color="white" />
  </Container>
);

export default Success;
