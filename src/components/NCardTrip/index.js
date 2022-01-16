import React from 'react';

import icon from '~/assets/icons/flechas_icon.svg';

import { Container } from './styles';
import NCardPeopleItem from '../NCardPeopleItem';

const NCardTrip = ({ adress1, adress2, price, time, ...rest }) => (
  <Container {...rest}>
    <div className="nameContainer">
      <img alt="icon" src={icon} className="icon" />
      <div>
        {adress1 && <p className="label">{adress1}</p>}
        {adress2 && <p className="label">{adress2}</p>}
      </div>
    </div>

    <NCardPeopleItem name={time} price={price} />
  </Container>
);

export default NCardTrip;
