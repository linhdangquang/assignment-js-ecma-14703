import instance from './config';

export const getCategories = () => {
  const url = '/categories';
  return instance.get(url);
};

export const getCategory = () => {

};
