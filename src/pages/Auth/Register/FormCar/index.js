import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { NTitle, NInput, NPicture, NButton } from '~/components';

import { Container, Form, DivPic } from './styles';
import { fields, schema } from './props';

const FormCar = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { register, formState, control, handleSubmit, watch } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const cnh = watch('cnh');
  const placa = watch('placa');
  const car = watch('car');

  const submit = () => {
    const email = state?.email;
    const phone = state?.phone;

    if (cnh && car && placa) {
      navigate('/cadastro/telefone', {
        state: {
          email,
          phone,
        },
      });
    } else alert('Preencha todos os campos!');
  };

  return (
    <Container>
      <NTitle label="Cadastro do veículo" className="ntitle" />
      <Form onSubmit={handleSubmit(submit)} autoComplete="off">
        {Object.entries(fields).map(([key, value]) => (
          <NInput
            key={key}
            error={formState.errors[key]?.message}
            {...value}
            {...register(key)}
          />
        ))}

        <DivPic>
          <p className="label">Insira a foto da placa do seu veículo:</p>
          <Controller
            control={control}
            name="placa"
            render={({ field }) => <NPicture id="placa" square {...field} />}
            rules={{ required: true }}
          />

          <p className="label">Insira a foto do seu veículo:</p>
          <Controller
            control={control}
            name="car"
            render={({ field }) => <NPicture id="car" square {...field} />}
            rules={{ required: true }}
          />

          <p className="label">Insira a foto da sua cnh:</p>
          <Controller
            control={control}
            name="cnh"
            render={({ field }) => <NPicture id="cnh" square {...field} />}
            rules={{ required: true }}
          />
        </DivPic>

        <NButton type="submit" label="prosseguir" />
      </Form>
    </Container>
  );
};

export default FormCar;
