/* eslint-disable max-len */
import NavAdmin from '../components/navD';
import HeaderAdmin from '../components/headerD';
import FooterAdmin from '../components/footerD';
import { getOrder, updateOrder } from '../../../api/orders';
import { getProductById } from '../../../api/products';
import USDFormat from '../../../utils/currencyFormat';
import LoadingRequest from '../components/loadingRequest';

const DetailOrder = {
  async render(id) {
    const orderData = await getOrder(id);
    const productsBuy = await Promise.all(orderData.data.productsOrder.map((product) => getProductById(product.productId)));
    const productsData = productsBuy.map((product) => product.data);
    return /* html */`
    <div class="container-fluid admin-container flex flex-row bg-gray-100 font-fira">
    ${NavAdmin.render()}
    <div class="ml-4 rounded-l-2xl relative bg-white w-full">
            ${HeaderAdmin.render('Categories')}
            <div class="px-7 py-5">
              <div class="mb-1 px-4 rounded-t-xl py-3 shadow-md border-b-2 border-gray-300 bg-gradient-to-r from-cyan-500 to-blue-500 ">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full max-w-full flex-grow flex-1" id="product-table">
                  <h3 class="font-semibold text-lg text-gray-200">
                      Detail Order
                  </h3>
                </div>
              </div>
            </div>
            <table id="table_id" class="w-full row-border table-auto table shadow-lg ">
              <thead class="pb-24">
                <tr class="p-4 text-center border-gray-900 ">
                  <th class="text-sm">Order ID</th>
                  <th class="text-sm">Name</th>
                  <th class="text-sm">Total Products</th>
                  <th class="text-sm">Total Price</th>
                  <th class="text-sm col-span-2">Status</th>
                </tr>
              </thead>
              
              <tbody>
                <tr class="text-center">
                  <td class="font-semibold text-gray-500">${orderData.data.id}</td>
                  <td class="name-category">${orderData.data.name}</td>
                  <td class="name-category">${orderData.data.totalQuantity}</td>
                  <td class="name-category">${USDFormat(orderData.data.totalPrice)}</td>
                  <td>
                    <form id="form-order" >
                      <select name="status" id="status" class="appearance-none select ${orderData.data.status === 'Pending' ? 'text-rose-600 ' : ''} ${orderData.data.status === 'Received' ? 'text-yellow-500 ' : ''} ${orderData.data.status === 'Completed' ? 'text-teal-600 ' : ''} ">
                        <option value="Pending" class="text-gray-800" ${orderData.data.status === 'Pending' ? 'selected ' : ''}>Pending</option>
                        <option value="Received" class="text-gray-800" ${orderData.data.status === 'Received' ? 'selected ' : ''}>Received</option>
                        <option value="Completed" class="text-gray-800" ${orderData.data.status === 'Completed' ? 'selected ' : ''}>Completed</option>
                      </select>
                      <button type="submit" id="submit" data-id="${orderData.data.id}" class="btn btn-primary">Save</button>
                    </form>
                  </td>
                </tr>
              </tbody>

              </table>
            </div>

            <div class="px-7 py-5">
              <div class="mb-1 px-4 rounded-t-xl py-3 shadow-md border-b-2 border-gray-300 bg-teal-300 ">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full max-w-full flex-grow flex-1" id="product-table">
                  <h3 class="font-semibold text-lg text-gray-100">
                      Detail Products Order
                  </h3>
                </div>
              </div>
            </div>
            <table id="table_id" class="w-full row-border table-auto table shadow-lg ">
              <thead class="pb-24">
                <tr class="p-4 text-center border-gray-900 ">
                  <th class="text-sm">ID Product</th>
                  <th class="text-sm">Name</th>
                  <th class="text-sm">Img</th>
                  <th class="text-sm">Price</th>
                  <th class="text-sm">Bought quantity</th>
                  <th class="text-sm">Total Price</th>
                </tr>
              </thead>
              
              <tbody>
               ${productsData.map((product, idx) =>/* html */`
                <tr class="text-center">
                  <td class="font-semibold text-gray-500">${product.id}</td>
                  <td>${product.name}</td>
                  <td><img src="${product.img}" alt="" class="w-20"></td>
                  <td>${USDFormat(parseInt(product.price, 10))}</td>
                  <td>${orderData.data.productsOrder[idx].productQuantity}</td>
                  <td>${USDFormat(orderData.data.productsOrder[idx].productQuantity * parseInt(product.price, 10))}</td>
                </tr>
                
                `).join('')}
              </tbody>

              </table>
            </div>
            ${FooterAdmin.render()}
    </div>
  </div>
    `;
  },
  afterRender() {
    NavAdmin.afterRender();
    document.querySelector('#form-order').addEventListener('submit', async (e) => {
      e.preventDefault();
      LoadingRequest.loading();
      const { id } = document.querySelector('#submit').dataset;
      try {
        await updateOrder(id, {
          status: document.querySelector('#status').value,
        });
        LoadingRequest.stopLoading();
        document.location.href = '/admin/orders/orders';
      } catch (error) {
        console.log(error);
      }
    });
  },
};
export default DetailOrder;
