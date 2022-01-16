export const createSession = data => ({
  data: {
    user: data,
    token: '',
  },
});
