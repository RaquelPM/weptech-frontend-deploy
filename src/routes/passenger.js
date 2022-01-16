import React from 'react';

import { Home } from '~/pages';
import {
  Embarkation,
  Disembarkation,
  Times,
  Profile,
  Trips,
  Waiting,
  Success,
  InTrip,
} from '~/pages/Passenger';
import { SlideRoutes } from '~/utils';

const Passenger = () => (
  <SlideRoutes
    routes={[
      {
        path: '/*',
        element: <Home />,
        exact: false,
      },
      {
        path: '/embarque',
        element: <Embarkation />,
      },
      {
        path: '/desembarque',
        element: <Disembarkation />,
      },
      {
        path: '/horarios',
        element: <Times />,
      },
      {
        path: '/perfil',
        element: <Profile />,
      },
      {
        path: '/viagens',
        element: <Trips />,
      },
      {
        path: '/aguarde',
        element: <Waiting />,
      },
      {
        path: '/viagem',
        element: <InTrip />,
      },
      {
        path: '/sucesso',
        element: <Success />,
      },
    ]}
  />
);

export default Passenger;
