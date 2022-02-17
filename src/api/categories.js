import instance from './config';

export const getCategories = () => {
  const url = '/categories';
  return instance.get(url);
};

export const addCategory = (category) => {
  const url = '/categories';
  return instance.post(url, category);
};

export const getProductsByCategory = (id) => {
  const url = `/categories/${id}?_embed=products`;
  return instance.get(url);
};
