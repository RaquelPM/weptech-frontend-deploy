import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '~/assets/icons/logo.svg';

import { NButton, NSmallButton } from '~/components';

import { Container, Logo } from './styles';
import Form from './Form';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="teste">
        <NSmallButton
          label="Passenger"
          color="white"
          onClick={() => {
            localStorage.setItem('passenger', true);
            alert('Acesso ao fluxo dos passageiros liberado');
          }}
        />
        <NSmallButton
          label="Driver"
          color="white"
          onClick={() => {
            localStorage.setItem('passenger', false);
            alert('Acesso ao fluxo dos motorista liberado');
          }}
        />
      </div>

      <Logo src={logo} alt="logo" />
      <Form />
      <p>Ainda não tem uma conta?</p>
      <NButton
        type="button"
        label="Cadastre-se"
        color="white"
        onClick={() => navigate('/cadastro')}
      />
    </Container>
  );
};

export default Login;
