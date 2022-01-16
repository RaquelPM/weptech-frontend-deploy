import React from 'react';

import moneyIcon from '~/assets/icons/money.svg';

import { Container } from './styles';
import NCardItem from '../NCardItem';

const NCardHistory = ({
  date,
  time,
  price,
  originNeighbour,
  destinyNeighbour,
  origin,
  destiny,
  driver,
  ...rest
}) => (
  <Container {...rest}>
    <p className="title">
      {date} - {time} - R${price}
    </p>
    <p className="places">
      {originNeighbour} - {destinyNeighbour}
    </p>
    <p className="origin-street">{origin}</p>
    <p className="destiny-street">{destiny}</p>
    <img className="icon" src={moneyIcon} alt="money" />
    <div className="item-div">
      <NCardItem small label={driver} />
    </div>
  </Container>
);

export default NCardHistory;
