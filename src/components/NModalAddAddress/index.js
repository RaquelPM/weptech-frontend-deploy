import React from 'react';
import { useForm } from 'react-hook-form';

import NButton from '../NButton';
import NInput from '../NInput';

import { Container, Form } from './styles';

const NModalAddAddress = ({ save, label, ...rest }) => {
  const { register, handleSubmit, watch } = useForm();

  const submit = () => {
    const street = watch('street');
    const number = watch('number');
    const reference = watch('reference');

    save({ streets: street, numbers: number, references: reference });
  };

  return (
    <Container {...rest}>
      <p className="title">{label}</p>
      <Form onSubmit={handleSubmit(submit)}>
        <NInput
          label="Rua"
          placeholder="Escreva o nome da rua."
          {...register('street', { required: true })}
        />
        <NInput
          label="Número"
          placeholder="O número é opcional."
          {...register('number')}
        />
        <NInput
          label="Ponto de referência"
          placeholder="O ponto de referência é opcional."
          {...register('reference')}
        />
        <NButton className="button" label="Confirmar" type="submit" />
      </Form>
      <p className="helper">
        Para fins de segurança e validação, escreva os nomes de forma correta.
      </p>
    </Container>
  );
};

export default NModalAddAddress;
