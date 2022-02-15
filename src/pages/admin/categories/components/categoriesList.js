import { getCategories, getProductsByCategory } from '../../../../api/categories';

const CategoriesList = {
  async render() {
    const categories = await getCategories();
    const products = await getProductsByCategory(1);
    const quantityProducts = categories.data.map((category) => getProductsByCategory(category.id));
    const quantity = await quantityProducts;
    console.log(quantity);
    console.log(categories.data.map((category) => category.id));
    return /* html */ `
      ${categories.data.map((category, idx) => /* html */ `
      <tr class="hover p-2">
        <th>
          <label>
            <input type="checkbox" class="checkbox checkbox-secondary focus:outline-0 focus:ring-pink-400 border-pink-300">
          </label>
        </th>
        <td class="font-semibold text-gray-500">${idx + 1}</td>
        <td class="name-category">${category.name}</td>
        <td>${getProductsByCategory(category.id)}</td>
        <td>
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
