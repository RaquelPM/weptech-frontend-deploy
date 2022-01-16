import React, { useState } from 'react';

import { useOutsideClick } from '~/hooks';

import moneyIcon from '~/assets/icons/money.svg';
import roadIcon from '~/assets/icons/icon_road.svg';

import { Container, Button, PassengersList } from './styles';
import NCardItem from '../NCardItem';

const NCardHistoryDriver = ({
  date,
  time,
  profit,
  origin,
  destiny,
  passengers = [],
  ...rest
}) => {
  const [open, setOpen] = useState(false);

  const container = useOutsideClick(() => setOpen(false));

  return (
    <Container ref={container} {...rest}>
      <div className="header">
        <img src={moneyIcon} alt="money" className="icon" />
        <p className="title">
          {date} - {time} - R${profit}
        </p>
        <Button open={open} onClick={() => setOpen(!open)}>
          <div className="horizontal" />
          <div className="vertical" />
        </Button>
      </div>
      <p className="label">
        {origin} - {destiny}
      </p>
      <PassengersList open={open} qt={passengers.length}>
        {passengers.map((item, index) => (
          <>
            <div className="street-div" key={`${index}-street-div`}>
              <img src={roadIcon} alt="road" className="icon" />
              <p className="place">{item.place}</p>
            </div>
            <NCardItem small label={item.name} key={`${index}-item`} />
          </>
        ))}
      </PassengersList>
    </Container>
  );
};

export default NCardHistoryDriver;
