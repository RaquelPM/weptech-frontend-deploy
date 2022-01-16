import React from 'react';

import icon from '~/assets/icons/icon_road.svg';

import { Container } from './styles';
import NCardItem from '../NCardItem';

const NCardDrop = ({ name, adress, ...rest }) => (
  <Container {...rest} adress={adress}>
    <div className="nameContainer">
      <img alt="icon" src={icon} className="icon" />
      {name && <p className="label">{name}</p>}
    </div>
    {adress && <NCardItem label={adress} />}
  </Container>
);

export default NCardDrop;
