import Swal from 'sweetalert2';
import { getCategories } from '../api/categories';
import USDFormat from '../utils/currencyFormat';
import Toast from '../pages/admin/components/toastAlert';
import { addToCart } from '../utils/cart';
import reRender from '../utils/rerender';
import Header from './header';
import { getProductById } from '../api/products';

const ProductCard = {
  async render(data) {
    const categories = await getCategories();
    console.log(categories.data);
    return /* html */`
    <div class="flex flex-col shadow-lg rounded-t-lg drop-shadow-xl bg-white">
      <div class="p-4 px-6 pb-2 grow flex items-center justify-center">
        <a href="/product/${data.id}">
          <img src="${data.img}" alt="">
        </a>
      </div>
      <div class="px-6 pb-2">
        <h3 class="text-center"><a href="" class="text-lg font-semibold tracking-widest uppercase">${categories.data.map((category) => {
    if (category.id === data.categoryId) {
      return category.name;
    } return '';
  }).join('')}</a></h3>
        <h4 class="text-center leading-4 h-14 text-gray-500 py-2 line-clamp-2 hover:text-gray-900 font-medium">
          <a href="/product/${data.id}" class="text-sm ">${data.name}</a>
        </h4>
        <h3 class=" text-center"><a href="/product/${data.id}" class="text-lg text-teal-500 font-medium">${USDFormat(data.price)}</a></h3>
        <div class="flex flex-row my-3 items-center justify-center">
          <div class="border-2 border-gray-300 text-gray-400 rounded-md px-2 py-1 mr-2">
            XL
          </div>
          <div class="border-2 border-gray-300 text-gray-400 rounded-md px-2 py-1 mr-2">
            XX
          </div>
          <div class="border-2 border-gray-300 text-gray-400 rounded-md px-2 py-1 mr-2">
            L
          </div>
          <div class="border-2 border-gray-300 text-gray-400 rounded-md px-2 py-1 mr-2">
            M
          </div>
          <div class="border-2 border-gray-300 text-gray-400 rounded-md px-2 py-1 mr-2">
            S
          </div>
        </div>
        
        </div>
        <div class="w-full p-0 m-0 grid grid-cols-2 gap-2">
          <button id="btn-add" data-id="${data.id}" class="btn-add bg-teal-500 hover:bg-teal-600 py-3.5 px-2 text-gray-50 uppercase font-medium text-xs flex flex-row justify-center transition-colors cursor-pointer">
            <i class="ri-shopping-cart-2-line align-text-bottom"></i>Add
            to cart
          </button>
          <a href="/product/${data.id}" class="bg-cyan-500 hover:bg-cyan-600 py-3.5 px-2 text-gray-50 uppercase font-medium text-xs flex flex-row justify-center transition-colors">
            View details
          </a>
        </div>
      </div>
    `;
  },
  afterRender() {
    const btns = document.querySelectorAll('.btn-add');
    btns.forEach((btn) => {
      const { id } = btn.dataset;
      btn.addEventListener('click', async () => {
        const { data } = await getProductById(id);
        if (parseInt(data.inStock, 10) === 0) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Sorry, item is out of stock',
            showConfirmButton: false,
            timer: 800,
          });
        } else {
          addToCart({ ...data, quantity: 1 }, () => {
            Toast.fire({ icon: 'success', title: 'Product added to cart', timer: 1000 });
            reRender(Header, '.cart');
          });
        }
      });
    });
  },
};

export default ProductCard;
