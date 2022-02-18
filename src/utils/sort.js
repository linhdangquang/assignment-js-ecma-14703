import orderBy from 'lodash.orderby';

export const SortCategoriesAsc = (array) => {
  orderBy(array, ['products.length'], ['asc']);
};

export const SortCategoriesDesc = (array) => {
  orderBy(array, ['products.length'], ['desc']);
};
