import axios from 'axios';

const ProductsTable = {
  async render() {
    const products = await axios.get('https://61e9165a2f23920017b0bab2.mockapi.io/products');
    return /* html */`
        ${products.data.map((product) => /* html */ `
        <tr class="hover">
          <th>
            <label>
              <input type="checkbox" class="checkbox checkbox-secondary focus:outline-0 focus:ring-pink-400 border-pink-300">
            </label>
          </th>
          <td class="font-semibold text-gray-500">${product.id}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td><img src="${product.img}" class="w-24"></td>
          <td>${product.createdAt}</td>
          <td>
            <div class="dropdown dropdown-end">
              <div tabindex="0" class="m-1 cursor-pointer hover:text-pink-600 text-xl"><i class="ri-more-2-fill"></i></div> 
              <ul tabindex="0" class="p-2 shadow menu dropdown-content border-gray-200 bg-base-100 rounded-box w-52">
                <li>
                  <a>Edit</a>
                </li> 
                <li>
                  <a>Delete</a>
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
