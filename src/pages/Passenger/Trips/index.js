import React, { useState } from 'react';

import { Background, NTitle, NCardHistory } from '~/components';
import { useApiEffect } from '~/hooks';
import { getOldTrips } from '~/services/passenger/oldTrips';

import { Container } from './styles';

const Trips = () => {
  const [trips, setTrips] = useState([]);

  useApiEffect(getOldTrips, response => setTrips(response.data));

  const cardsTrips = trips.map((trip, i) => (
    <NCardHistory
      key={i}
      date={trip.date}
      time={trip.time}
      price={trip.profit}
      originNeighbour={trip.trip.embarkation.district}
      destinyNeighbour={trip.trip.disembarkation.district}
      origin={trip.trip.embarkation.local}
      destiny={trip.trip.disembarkation.local}
      driver={trip.trip.driver}
      className="card"
    />
  ));

  return (
    <Container>
      <Background />
      <div className="div_top">
        <NTitle label="Viagens" className="title_viagens" color="white" />
      </div>
      {cardsTrips}
    </Container>
  );
};

export default Trips;
