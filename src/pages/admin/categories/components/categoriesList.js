/* eslint-disable max-len */
import { getCategories, getProductsByCategory } from '../../../../api/categories';
import * as sort from '../../../../utils/sort';

const CategoriesList = {
  async render() {
    const categories = await getCategories();
    const productsByCategory = categories.data.map((category) => getProductsByCategory(category.id));
    const data = await Promise.all(productsByCategory.map((result) => result.then((item) => item.data)));
    sort.SortCategoriesDesc(data);
    return /* html */ `
      ${data.map((category, idx) => /* html */ `
      <tr class="hover text-center">
        <td class="font-semibold text-gray-500">${idx + 1}</td>
        <td class="name-category">${category.name}</td>
        <td>${category.products.length}</td>
        <td class="text-right">
          <div class="dropdown dropdown-end">
            <div tabindex="0" class="m-1 cursor-pointer hover:text-pink-600 text-xl"><i class="ri-more-2-fill"></i></div> 
            <ul tabindex="0" class="p-2 shadow menu dropdown-content border-gray-200 bg-base-100 rounded-box w-52">
              <li>
                <a href="/admin/categories/edit/${category.id}" class="active:bg-cyan-500">Edit</a>
              </li> 
              <li>
                <button class="btn-del-category rounded-md active:bg-red-500" data-category="${category.id}">
                  Delete
                </button>
              </li> 
            </ul>
          </div>
        </td>
      </tr>
      `).join('')}
    `;
  },
};

export default CategoriesList;
