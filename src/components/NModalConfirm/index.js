import React from 'react';

import { CgArrowsExchange } from 'react-icons/cg';

import { Container, Wrapper } from './styles';
import NButton from '../NButton';

const NModalConfirm = ({
  label = '',
  origin = '',
  destiny = '',
  confirmLabel = 'Confirmar',
  visible,
  onConfirm = () => null,
  onCancel = () => null,
  onClose = () => null,
  ...rest
}) => (
  <Container visible={visible} {...rest} onClose={onClose}>
    <p className="label">{label}</p>
    <p className="title_w">Embarque:</p>
    <Wrapper className="wrapper">
      <p className="content">{origin}</p>
    </Wrapper>
    <CgArrowsExchange size={50} className="icon_change" onClick={onCancel} />
    <p className="title_w">Desembarque:</p>
    <Wrapper className="wrapper">
      <p className="content">{destiny}</p>
    </Wrapper>
    <NButton
      className="confirm-button"
      color="primary"
      onClick={onConfirm}
      label={confirmLabel}
    />
  </Container>
);

export default NModalConfirm;
