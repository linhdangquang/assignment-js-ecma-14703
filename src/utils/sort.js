export const SortCategoriesAsc = (array) => {
  array.sort((a, b) => {
    const keyA = a.products.length;
    const keyB = b.products.length;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
};

export const SortCategoriesDesc = (array) => {
  array.sort((a, b) => {
    const keyA = a.products.length;
    const keyB = b.products.length;
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });
};
