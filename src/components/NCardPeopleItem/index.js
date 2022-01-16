import React from 'react';

import { BsCheckLg, BsWhatsapp } from 'react-icons/bs';

import { Container, Icon } from './styles';

const NCardItem = ({ name, price, onContact, onConfirm, ...rest }) => (
  <Container {...rest}>
    {onContact && (
      <Icon className="iconContact" onClick={onContact}>
        <BsWhatsapp size={20} />
      </Icon>
    )}
    {name && price && (
      <div className="divLabels">
        <p className="labelName">{name}</p>
        <p className="label">&nbsp;- R$</p>
        <p className="labelMoney">{price}</p>
      </div>
    )}
    {onConfirm && (
      <Icon className="iconConfirm" onClick={onConfirm}>
        <BsCheckLg size={16} />
      </Icon>
    )}
  </Container>
);

export default NCardItem;
