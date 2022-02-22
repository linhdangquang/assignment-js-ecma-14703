/* eslint-disable max-len */
import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import validate from 'jquery-validation';
import sumBy from 'lodash.sumby';
import Swal from 'sweetalert2';
import Header from '../components/header';
import Footer from '../components/footer';
import Breadcrumbs from '../components/breadcrumbs';
import { createOrders } from '../api/orders';
import { updateProduct, getProductById } from '../api/products';
import USDFormat from '../utils/currencyFormat';
import LoadingRequest from './admin/components/loadingRequest';
import Nav from '../components/nav';
import reRender from '../utils/rerender';

const CheckoutPage = {
  async render() {
    if (localStorage.getItem('order')) {
      const { products, totalPrice } = JSON.parse(localStorage.getItem('order'));
      return /* html */ `
          <div class="container mx-auto p-5 font-montserrat">
              ${await Header.render()}
              ${Breadcrumbs.render('Checkout')}
              <main class="py-4 grid grid-cols-2">
                <div>
                  <h2 class="text-xl font-bold">Please input some information before checkout</h2>
                  <form id="order-form">
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text font-mono">Your name</span>
                      </label>
                      <input type="text" name="name" id="name" autocomplete="off" placeholder="Type here" class="input input-bordered  border-2 border-gray-500 text-base active:border-outline-50 w-full max-w-xs">
                    </div>
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text font-mono">Your phone number</span>
                      </label>
                      <input type="number" name="phone" id="phone" autocomplete="off" placeholder="Type here" class="input input-bordered  border-2 border-gray-500 text-base active:border-outline-50 w-full max-w-xs">
                    </div>
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text font-mono">Your address</span>
                      </label>
                      <input type="address" name="address" id="address" autocomplete="off" placeholder="Type here" class="input input-bordered  border-2 border-gray-500 text-base active:border-outline-50 w-full max-w-xs">
                    </div>
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text font-mono">Your email</span>
                      </label>
                      <input type="email" name="email" id="email" autocomplete="off" placeholder="Type here" class="input input-bordered  border-2 border-gray-500 text-base active:border-outline-50 w-full max-w-xs">
                    </div>
                    <div class="form-control w-full max-w-xs py-3">
                      <button id="submit" class="btn btn-primary">Confirm Order</button>
                    </div>
                  </form>
                </div>
                <div>
                <div class="overflow-x-auto">
                <table class="table w-full">
                  <h2 class="text-center text-xl font-bold text-gray-500 border-b-2">Order Details</h2>
                  <!-- head -->
                  <thead>
                    <tr >
                      <th class="w-1/5 text-gray-700">ID Products</th>
                      <th class="text-gray-700">Name Products</th>
                      <th class="text-gray-700">Quantity</th>
                      <th class="text-gray-700">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${products.map((product) => `
                    <tr>
                      <th class="text-sm">${product.id}</th>
                      <td class="text-sm">${product.name}</td>
                      <td class="text-sm">${product.quantity}</td>
                      <td class="text-sm">${USDFormat(parseInt(product.price, 10) * product.quantity)}</td>
                    </tr>`).join('')}
                  </tbody>
                </table>
                <h1 class="text-right text-lg font-semibold p-4" >Total: <strong>${USDFormat(totalPrice)}</strong> </h1>
              </div>
                </div>
              </main>
              ${Footer.render()}
          </div>
          `;
    }
    return /* html */`
        <div class="container mx-auto p-5 font-montserrat">
        ${await Header.render()}
        <main>
          <h1 class="text-center font-bold text-2xl">You  don't have anythings to do here'</h1>
        </main>
        ${Footer.render()}
          </div>
`;
  },
  afterRender() {
    Header.afterRender();

    $.validator.methods.number = function (value, element) {
      return this.optional(element) || /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value);
    };
    $('#order-form').validate({
      rules: {
        name: {
          required: true,
        },
        phone: {
          required: true,
          number: true,
        },
        address: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: 'Please enter a name.',
        },
        phone: {
          required: 'Please enter a phone number.',
          number: 'Please enter a valid phone number.',
        },
        address: {
          required: 'Please enter a  address.',
        },
        email: {
          required: 'Please enter a email address.',
          email: 'Please enter a valid email address.',
        },
      },

      submitHandler() {
        async function addOrder() {
          const order = JSON.parse(localStorage.getItem('order'));
          const orderDetail = {
            name: $('#name').val(),
            phone: $('#phone').val(),
            address: $('#address').val(),
            email: $('#email').val(),
            productsOrder: order.products.map((product) => ({ productId: product.id, productQuantity: product.quantity })),
            totalQuantity: sumBy(order.products, 'quantity'),
            totalPrice: order.totalPrice,
            status: 'Pending',
          };
          console.log(orderDetail);
          Swal.fire({
            title: 'Confirm Order?',
            text: "You won't be able to revert this!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#f43f5e',
            confirmButtonText: 'Yes',
          }).then(async (result) => {
            if (result.isConfirmed) {
              LoadingRequest.loading();
              const inStockProducts = await Promise.all(order.products.map((product) => getProductById(product.id)));
              console.log(orderDetail.productsOrder[0].quantity);
              const update = await Promise.all(inStockProducts.map((product, idx) => updateProduct({ id: product.data.id, inStock: parseInt(inStockProducts[idx].data.inStock, 10) - parseInt(orderDetail.productsOrder[idx].productQuantity, 10) })));
              console.log(update);
              localStorage.removeItem('cart');
              localStorage.removeItem('order');
              await createOrders(orderDetail)
                .then(() => {
                  LoadingRequest.stopLoading();
                  reRender(Nav, 'nav');
                  Swal.fire(
                    'Thank you !',
                    'We received your orders successfully!',
                    'success',
                  );
                  document.location.href = '/';
                });
            }
          });
        }
        addOrder();
      },
    });
  },
};

export default CheckoutPage;
