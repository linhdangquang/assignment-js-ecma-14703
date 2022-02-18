import orderBy from 'lodash.orderby';

export const SortCategoriesAsc = (array) => {
  orderBy(array, ['products.length'], ['asc']);
  // array.sort((a, b) => {
  //   const keyA = a.products.length;
  //   const keyB = b.products.length;
  //   if (keyA < keyB) return -1;
  //   if (keyA > keyB) return 1;
  //   return 0;
  // });
};

export const SortCategoriesDesc = (array) => {
  orderBy(array, ['products.length'], ['desc']);
  // array.sort((a, b) => {
  //   const keyA = a.products.length;
  //   const keyB = b.products.length;
  //   if (keyA > keyB) return -1;
  //   if (keyA < keyB) return 1;
  //   return 0;
  // });
};
