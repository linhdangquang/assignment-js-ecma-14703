import { getAllProducts } from '../../../../api/products';

const ProductsTable = {
  async render() {
    const products = await getAllProducts();
    return /* html */`
        ${products.data.map((product, idx) => /* html */ `
        <tr class="hover">
          <th>
            <label>
              <input type="checkbox" class="checkbox checkbox-secondary focus:outline-0 focus:ring-pink-400 border-pink-300">
            </label>
          </th>
          <td class="font-semibold text-gray-500">${idx + 1}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td><img src="${product.img}" class="w-24"></td>
          <td>${product.createdAt}</td>
          <td>
            <div class="dropdown dropdown-end">
              <div tabindex="0" class="m-1 cursor-pointer hover:text-pink-600 text-xl"><i class="ri-more-2-fill"></i></div> 
              <ul tabindex="0" class="p-2 shadow menu dropdown-content border-gray-200 bg-base-100 rounded-box w-52">
                <li>
                  <a href="/admin/products/edit/${product.id}" class="active:bg-cyan-500">Edit</a>
                </li> 
                <li>
                  <button class="btn-del-product rounded-md active:bg-red-500" data-product="${product.id}">
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

export default ProductsTable;
