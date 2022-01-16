import React, { useState } from 'react';

import { Background, NTitle, NCardHistoryDriver } from '~/components';
import { useApiEffect } from '~/hooks';
import { getOldTrips } from '~/services/driver/oldTrips';

import { Container } from './styles';

const Trips = () => {
  const [trips, setTrips] = useState([]);

  useApiEffect(getOldTrips, response => setTrips(response.data));

  const cardsTrips = trips.map((trip, i) => (
    <NCardHistoryDriver
      key={i}
      date={trip.date}
      time={trip.time}
      profit={trip.profit}
      origin={trip.trip.embarkation}
      destiny={trip.trip.disembarkation}
      passengers={trip.trip.passengers}
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
