import React from 'react';
import { useLocation } from 'react-router-dom';

import { Login, Register } from '~/pages/Auth';
import { SlideRoutes } from '~/utils';

const Auth = () => {
  const { state } = useLocation();

  return (
    <SlideRoutes
      routes={[
        {
          path: '/*',
          element: <Login />,
          exact: false,
        },
        {
          path: '/cadastro',
          element: <Register />,
        },
        {
          path: '/cadastro/veiculo',
          element: <Register.FormCar />,
          skip: !state?.phone,
        },
        {
          path: '/cadastro/telefone',
          element: <Register.Phone />,
          skip: !state?.phone,
        },
        {
          path: '/cadastro/email',
          element: <Register.Email />,
          skip: state?.phone || !state?.email,
        },
        {
          path: '/cadastro/sucesso',
          element: <Register.Success />,
        },
      ]}
    />
  );
};

export default Auth;
