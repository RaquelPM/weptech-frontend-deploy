import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { NButton, NInput, NSelector, NPicture } from '~/components';
import { useApi } from '~/hooks';
import { createUser } from '~/services/users';

import { Container } from './styles';
import { fields, schema, extraFields } from './props';
import NTypeSelect from '../NTypeSelect';

const Form = () => {
  const navigate = useNavigate();

  const { register, control, formState, handleSubmit, watch } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const email = watch('email');
  const phone = watch('phone');
  const type = watch('type');

  const create = useApi(createUser, () => {
    if (type === 'passenger') {
      navigate('/cadastro/telefone', {
        state: { email, phone },
      });
    } else {
      navigate('/cadastro/veiculo', {
        state: { email, phone },
      });
    }
  });

  return (
    <Container onSubmit={handleSubmit(create)} autoComplete="off">
      <Controller
        control={control}
        name="type"
        render={({ field }) => <NTypeSelect {...field} />}
        rules={{ required: true }}
        defaultValue="passenger"
      />
      {type === 'driver' && (
        <div className="div_pic">
          <p>Insira sua foto aqui:</p>
          <Controller
            control={control}
            name="picture"
            render={({ field }) => <NPicture id="foto" {...field} />}
            rules={{ required: true }}
          />
        </div>
      )}

      {Object.entries(fields).map(([key, value]) =>
        value.type === 'selector' ? (
          <Controller
            control={control}
            name={key}
            key={key}
            render={({ field }) => (
              <NSelector
                key={key}
                error={formState.errors[key]?.message}
                {...value}
                {...field}
              />
            )}
          />
        ) : (
          <NInput
            key={key}
            error={formState.errors[key]?.message}
            {...value}
            {...register(key)}
          />
        )
      )}

      {Object.entries(extraFields).map(([key, value]) =>
        type === 'driver' ? (
          <NInput
            key={key}
            error={formState.errors[key]?.message}
            {...value}
            {...register(key)}
          />
        ) : (
          <p key={key} />
        )
      )}

      <NButton className="submit-button" type="submit" label="Cadastrar" />
    </Container>
  );
};

export default Form;
