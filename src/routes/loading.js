import { useEffect } from 'react';

import { useAuth } from '~/hooks';
import { getUserData } from '~/services/users';

const Loading = ({ hideLoading = () => null }) => {
  const { setUser, setIsPassenger } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isPassenger = localStorage.getItem('passenger');

    console.log(token);

    if (token === null) {
      hideLoading();

      return;
    }

    const request = async () => {
      try {
        setIsPassenger(isPassenger);
        const response = await getUserData(token);
        setUser(response.data.user);
      } finally {
        hideLoading();
      }
    };

    request();
  }, []);

  return null;
};

export default Loading;
