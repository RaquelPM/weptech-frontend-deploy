import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoHelpCircleSharp } from 'react-icons/io5';
import {
  Sidebar,
  NSearch,
  NCardTrip,
  NModalConfirm,
  NModalSure,
  Background,
} from '~/components';
import { useApiEffect, useAuth } from '~/hooks';
import { getTrips } from '~/services/trips';

import { Container } from './styles';

const Home = () => {
  const { isPassenger } = useAuth();

  const [trips, setTrips] = useState([]);
  const [modal, setModal] = useState(false);
  const [embarkation, setEmbarkation] = useState('');
  const [disembarkation, setDisembarkation] = useState('');

  const navigate = useNavigate();

  useApiEffect(getTrips, response => setTrips(response.data));

  const changeTrip = () => {
    setEmbarkation(disembarkation);
    setDisembarkation(embarkation);
  };

  function redirect(trip) {
    setModal(true);
    if (isPassenger) {
      setDisembarkation(trip.destination);
      setEmbarkation(trip.origin);
    }
  }

  const cardsTrips = trips.map(trip => (
    <NCardTrip
      key={trip.id}
      adress1={trip.origin}
      adress2={trip.destination}
      price={trip.price}
      time={trip.time}
      className="card"
      onClick={() => redirect(trip)}
    />
  ));

  return (
    <Container>
      <Background />
      <div className="div_top">
        <Sidebar />
        <div className="div_economy">
          <p className="economy_title">Veja sua economia</p>
          <div className="div_money_time">
            <p>50 min - R$ 100,00</p>
          </div>
        </div>
        <IoHelpCircleSharp size={30} className="icon_help" />
      </div>

      <NSearch className="nsearch" />

      {cardsTrips}

      {isPassenger && (
        <NModalConfirm
          visible={modal}
          label="O local de embarque está correto?"
          origin={embarkation}
          destiny={disembarkation}
          confirmLabel="Sim, Confirmar"
          cancelLabel="Não, Trocar"
          onCancel={() => changeTrip()}
          onConfirm={() => {
            setModal(false);
            navigate('/embarque', {
              state: { embarkation, disembarkation },
            });
          }}
          onClose={() => setModal(false)}
        />
      )}

      {!isPassenger && (
        <NModalSure
          visible={modal}
          label="Tem certeza que quer entrar nesta viagem?"
          onCancel={() => setModal(false)}
          onConfirm={() => {
            setModal(false);
            navigate('/embarques');
          }}
          onClose={() => setModal(false)}
        />
      )}
    </Container>
  );
};

export default Home;
