import Swal from 'sweetalert2';
import Footer from '../components/footer';
import Header from '../components/header';
import USDFormat from '../utils/currencyFormat';
import Breadcrumbs from '../components/breadcrumbs';
import * as cartFunc from '../utils/cart';
import reRender from '../utils/rerender';

const CartPage = {
  async render() {
    if (localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).length > 0) {
      const cart = JSON.parse(localStorage.getItem('cart'));
      return /* html */`
      <div class="container mx-auto p-5 font-montserrat">
        ${Header.render()}
        ${Breadcrumbs.render('Cart')}
        <main class="py-4 main">
          <div class="w-full overflow-x-auto">
          <div class="my-2">
            <h3 class="text-xl font-bold tracking-wider">Your Cart</h3>
          </div>
          <table class="table text-center w-full shadow-inner">
            <thead class="text-gray-600">
              <tr>
                <th class="px-6 py-3 font-bold whitespace-nowrap">Image</th>
                <th class="px-6 py-3 font-bold whitespace-nowrap">Product</th>
                <th class="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
                <th class="px-6 py-3 font-bold whitespace-nowrap">Price</th>
                <th class="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
              </tr>
            </thead>
            <tbody class="my-4">
              ${cart.map((item) => /* html */`
              <tr class="">
                  <td>
                    <div class="flex justify-center">
                      <img
                        src="${item.img}"
                        class="object-cover h-28 w-24 rounded-2xl mask mask-squircle py-2 " alt="image" />
                    </div>
                  </td>
                  <td class="p-4 px-6 text-center whitespace-nowrap">${item.name}</td>
                  <td class="p-4 px-6 text-center whitespace-nowrap">
                    <div>
                      <button class="btn-item btn-decrease" data-id="${item.id}">
                        <i class="ri-indeterminate-circle-line text-red-600 text-2xl align-middle active:text-red-700 "></i>
                      </button>
                      <input type="text" name="qty" value="${item.quantity}" class="w-12 text-center outline-none border-0" />
                      <button class="btn-item btn-increase" data-id="${item.id}">
                        <i class="ri-add-circle-line  text-green-600 text-2xl align-middle active:text-green-700  "></i>
                      </button>
                    </div>
                  </td>
                  <td class="p-4 px-6 text-center whitespace-nowrap">${USDFormat(item.price)}</td>
                  <td class="p-4 px-6 text-center whitespace-nowrap">
                    <button class="btn-item btn-remove" data-id="${item.id}">
                    <i class="ri-delete-bin-line text-red-400 text-2xl active:text-red-500"></i>
                    </button>
                  </td>
                </tr>
                `).join('')}
            </tbody>

            <div class="flex justify-end pb-2">
                <button id="btn-empty-cart" class="p-4 py-3 rounded-lg bg-rose-500 text-white hover:bg-rose-600 active:scale-95">Empty Cart</button>
              </div>
          </table>
          
          <div class="mt-4">
            
            <div class="pt-4 rounded-md shadow bg-gray-50">
              <h3 class="text-xl font-bold text-cyan-600 px-4">Order Summary</h3>
              <div class="flex justify-between px-4">
                <span class="font-bold">Subtotal</span>
                <span class="font-bold">$35.25</span>
              </div>
              <div class="flex justify-between px-4">
                <span class="font-bold">Discount</span>
                <span class="font-bold text-red-600">- $5.00</span>
              </div>
              <div class="flex justify-between px-4">
                <span class="font-bold">Sales Tax</span>
                <span class="font-bold">$2.25</span>
              </div>
              <div class="flex items-center justify-between px-4 py-2 mt-3 border-t-2">
                <span class="text-xl font-bold">Total</span>
                <span class="text-2xl font-bold">$37.50</span>
              </div>
            </div>
          </div>
          <div class="my-4 flex justify-end">
            <button class="w-1/4 py-2 text-center text-white bg-cyan-500 rounded-md shadow transition-colors hover:bg-cyan-600">
              Proceed to Checkout
            </button>
          </div>
        </div>  
        </main>
        ${Footer.render()}
      </div>
    `;
    }
    return /* html */ `
    <div class="container mx-auto p-5 font-montserrat">
        ${Header.render()}
        ${Breadcrumbs.render('Cart')}
        <main class="flex items-center justify-center">
          <img src="https://rtworkspace.com/wp-content/plugins/rtworkspace-ecommerce-wp-plugin/assets/img/empty-cart.png" alt="">
        </main>
        ${Footer.render()}
    </div>
    `;
  },
  afterRender() {
    Header.afterRender();
    const btns = document.querySelectorAll('.btn-item');
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const { id } = btn.dataset;
        if (btn.classList.contains('btn-decrease')) {
          cartFunc.decreaseQuantity(id, () => {
            reRender(CartPage, '#container');
          });
        } else if (btn.classList.contains('btn-increase')) {
          cartFunc.increaseQuantity(id);
          reRender(CartPage, '#container');
        } else {
          cartFunc.removeItemCart(id, () => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Removed item in cart successfully',
              showConfirmButton: false,
              timer: 1000,
            });
            reRender(CartPage, '#container');
          });
        }
      });
    });
    document.querySelector('#btn-empty-cart').addEventListener('click', () => {
      cartFunc.emptyCart(() => {
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'Removed all item in cart successfully',
          showConfirmButton: false,
          timer: 1200,
        });
        reRender(CartPage, '#container');
      });
    });
  },
};

export default CartPage;
