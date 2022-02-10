import instance from './config';

export const signUp = (user) => {
  const url = '/signup';
  return instance.post(url, user);
};
export const signIn = (user) => {
  const url = '/signin';
  return instance.post(url, user);
};
