import React from 'react';
import VerificationInput from 'react-verification-input';

import { NButton, NTitle } from '~/components';

import { Container } from './styles';

const Confirm = ({ title, value, type, onSubmit }) => (
  <Container>
    <NTitle label={title} className="title" />
    <p>Enviamos um {type} para:</p>
    <p className="value">{value}</p>
    <p>Digite o código de verificação:</p>
    <VerificationInput
      classNames={{
        container: 'input-container',
        character: 'input',
        characterSelected: 'input-selected',
        characterInactive: 'input-inactive',
      }}
    />
    <NButton className="button" label="Enviar" onClick={onSubmit} />
  </Container>
);

export default Confirm;
