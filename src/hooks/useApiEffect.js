import { useEffect } from 'react';

import useApi from './useApi';

const useApiEffect = (service = () => null, callback = () => null) => {
  useEffect(() => {
    const request = useApi(service, callback);

    request();
  }, []);
};

export default useApiEffect;
