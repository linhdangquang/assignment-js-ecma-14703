import Swal from 'sweetalert2';
import dt from 'datatables.net';
import $ from 'jquery';
import NavAdmin from '../components/navD';
import HeaderAdmin from '../components/headerD';
import FooterAdmin from '../components/footerD';
import OrdersList from './components/orders-list';

const OrdersAdmin = {
  async render() {
    dt();
    return /* html */`
    <div class="container-fluid admin-container flex flex-row bg-gray-100 font-fira">
    ${NavAdmin.render()}
    <div class="ml-4 rounded-l-2xl relative bg-white w-full">
            ${HeaderAdmin.render('Categories')}
            <div class="px-7 py-5">
              <div class="mb-1 px-4 rounded-t-xl py-3 shadow-md border-b-2 border-gray-300 bg-slate-300 ">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full max-w-full flex-grow flex-1" id="product-table">
                  <h3 class="font-semibold text-lg text-gray-500">
                      Order List
                  </h3>
                </div>
              </div>
            </div>
            <table id="table_id" class="w-full row-border table-auto table ">
              <thead class="pb-24">
                <tr class="p-4 text-center border-gray-900 ">
                  <th class="text-sm">ID</th>
                  <th class="text-sm">Orderer</th>
                  <th class="text-sm">Phone</th>
                  <th class="text-sm">Address</th>
                  <th class="text-sm">Email</th>
                  <th class="text-sm">Total Products</th>
                  <th class="text-sm">Status</th>
                  <th ></th>
                </tr>
              </thead>
              
              <tbody>
                 ${await OrdersList.render()}
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
    $(() => {
      $('#table_id').DataTable({
        pagingType: 'full_numbers',
      });
    });
  },
};

export default OrdersAdmin;
