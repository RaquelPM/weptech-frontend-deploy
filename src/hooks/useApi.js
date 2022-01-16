const useApi = (service = () => null, callback = () => null) => {
  const request = async (...params) => {
    try {
      const response = await service(...params);

      console.log(response, callback);

      callback(response);
    } catch (error) {
      callback(error);
    }
  };

  return request;
};

export default useApi;
