import instance from './config';

export const getAllProducts = () => {
  const url = '/products';
  return instance.get(url);
};

export const getProductById = (id) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const addProduct = (product) => {
  const url = '/products';
  return instance.post(url, product);
};

export const delProduct = (id) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};

export const updateProduct = (product) => {
  const url = `/products/${product.id}`;
  return instance.patch(url, product);
};
