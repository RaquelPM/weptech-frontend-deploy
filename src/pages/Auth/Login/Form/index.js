import React from 'react';
import { useForm } from 'react-hook-form';

import { NInput, NButton } from '~/components';
import { useApi, useAuth } from '~/hooks';
import { createSession } from '~/services/sessions';

import { Container } from './styles';

const Form = props => {
  const { setUser, setIsPassenger } = useAuth();
  const { register, handleSubmit } = useForm();

  const login = useApi(createSession, response => {
    setUser(response.data.user);
    setIsPassenger(localStorage.getItem('passenger'));

    localStorage.setItem('token', response.data.token);

    window.location.reload();
  });

  return (
    <Container onSubmit={handleSubmit(login)} autoComplete="off" {...props}>
      <NInput
        type="email"
        label="Email"
        placeholder="Digite o seu email aqui."
        {...register('email', { required: true })}
      />
      <NInput
        type="password"
        label="Senha"
        placeholder="Insira a senha da sua conta"
        {...register('password', { required: true })}
      />
      <NButton type="submit" label="Entrar" className="button" />
      <a href="/password_recover">RECUPERAR SENHA</a>
    </Container>
  );
};

export default Form;
