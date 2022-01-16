import React from 'react';

import icon from '~/assets/icons/icon_road.svg';

import { Container } from './styles';
import NCardPeopleItem from '../NCardPeopleItem';

const NCardPeople = ({ name, adress, people = [], ...rest }) => (
  <Container {...rest} length={people.length}>
    <div className="nameContainer">
      <img alt="icon" src={icon} className="icon" />
      <div>
        {name && <p className="label">{name}</p>}
        {adress && <p className="labelAdress">{adress}</p>}
      </div>
    </div>
    <div className="peopleDiv">
      {people.map(item => (
        <NCardPeopleItem key={item.id} {...item} className="item" />
      ))}
    </div>
  </Container>
);

export default NCardPeople;
