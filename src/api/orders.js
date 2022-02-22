import instance from './config';

export const getAllOrders = () => {
  const url = '/orders';
  return instance.get(url);
};
export const createOrders = (data) => {
  const url = '/orders';
  return instance.post(url, data);
};
