import { getAllOrders } from '../../../../api/orders';

const OrdersList = {
  async render() {
    const orders = await getAllOrders();
    return /* html */`
      ${orders.data.map((order, idx) => /* html */`
      <tr class="hover text-center">
        <td class="font-semibold text-gray-500">${idx + 1}</td>
        <td class="name-category">${order.name}</td>
        <td class="name-category">${order.phone}</td>
        <td class="name-category">${order.address}</td>
        <td class="name-category">${order.email}</td>
        <td class="name-category">${order.totalQuantity}</td>
        <td class="name-category ${order.status === 'Pending' ? 'text-rose-600 ' : ''} ">${order.status}</td>
        <td class="text-right">
          <div class="dropdown dropdown-end">
            <div tabindex="0" class="m-1 cursor-pointer hover:text-pink-600 text-xl"><i class="ri-more-2-fill"></i></div> 
            <ul tabindex="0" class="p-2 shadow menu dropdown-content border-gray-200 bg-base-100 rounded-box w-52">
              <li>
                <a href="/admin/orders/details/:id" class="active:bg-cyan-500">View details</a>
              </li> 
              <li>
                <button class="btn-del-category rounded-md active:bg-red-500" data-order="${order.id}">
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
export default OrdersList;
