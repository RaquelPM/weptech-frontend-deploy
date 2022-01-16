import React from 'react';

import {
  Disembarkations,
  Embarkations,
  Profile,
  Trips,
  Success,
} from '~/pages/Driver';
import { Home } from '~/pages';
import { SlideRoutes } from '~/utils';

const Driver = () => (
  <SlideRoutes
    routes={[
      {
        path: '/*',
        element: <Home />,
        exact: false,
      },
      {
        path: '/embarques',
        element: <Embarkations />,
      },
      {
        path: '/desembarques',
        element: <Disembarkations />,
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
        path: '/sucesso',
        element: <Success />,
      },
    ]}
  />
);

export default Driver;
