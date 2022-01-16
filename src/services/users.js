export const createUser = async data => ({
  data: {
    user: data,
    token: '',
  },
});

export const getUserData = async () => ({
  data: {
    user: {},
  },
});
