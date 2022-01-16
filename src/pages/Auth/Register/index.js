import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { NTitle } from '~/components';

import { Container } from './styles';
import Form from './Form';
import Confirm from './Confirm';
import Success from './Success';
import FormCar from './FormCar';

const Register = () => (
  <Container>
    <NTitle label="Cadastro" />
    <Form />
  </Container>
);

Register.FormCar = () => <FormCar />;

Register.Phone = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <Confirm
      title="Verificar número"
      type="SMS"
      value={state?.phone}
      onSubmit={() =>
        navigate('/cadastro/email', {
          state: {
            email: state?.email,
          },
        })
      }
    />
  );
};

Register.Email = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <Confirm
      title="Verificar email"
      type="email"
      value={state?.email}
      onSubmit={() => navigate('/cadastro/sucesso')}
    />
  );
};

Register.Success = () => {
  const navigate = useNavigate();

  return <Success redirect={() => navigate('/')} />;
};

export default Register;
