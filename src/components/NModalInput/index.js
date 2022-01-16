import React, { useRef } from 'react';

import iconRoad from '~/assets/icons/icon_road.svg';

import { Container } from './styles';
import NButton from '../NButton';
import NInput from '../NInput';

const NModalInput = ({
  label = '',
  icon = iconRoad,
  buttonLabel = 'Confirmar',
  onButtonClick,
  visible,
  className,
  onClose = () => null,
  ...rest
}) => {
  const input = useRef();

  return (
    <Container visible={visible} className={className} onClose={onClose}>
      <img className="icon" src={icon} alt="road" />
      <p className="label">{label}</p>
      <NInput className="input" ref={input} {...rest} />
      <NButton
        className="button"
        label={buttonLabel}
        onClick={() => onButtonClick(input.current.value)}
      />
    </Container>
  );
};

export default NModalInput;
