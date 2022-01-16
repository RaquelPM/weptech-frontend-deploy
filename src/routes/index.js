import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '~/hooks';

import Auth from './auth';
import Driver from './driver';
import Loading from './loading';
import Passenger from './passenger';

const Routes = () => {
  const { user, isPassenger } = useAuth();
  // const isPassengerr = localStorage.getItem('passenger');

  const [loading, setLoading] = useState(true);

  function route() {
    if (user) {
      if (isPassenger) return Passenger;
      return Driver;
    }
    return Auth;
  }

  const Route = route();

  return loading ? (
    <Loading hideLoading={() => setLoading(false)} />
  ) : (
    <Route />
  );
};

export default () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
