import instance from './config';

export const getAllOrders = () => {
  const url = '/orders';
  return instance.get(url);
};
export const getOrder = (id) => {
  const url = `/orders/${id}`;
  return instance.get(url);
};
export const updateOrder = (id, order) => {
  const url = `/orders/${id}`;
  return instance.patch(url, order);
};
export const createOrders = (data) => {
  const url = '/orders';
  return instance.post(url, data);
};
