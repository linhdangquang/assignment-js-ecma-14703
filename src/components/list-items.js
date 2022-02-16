import Swal from 'sweetalert2';
import { getAllProducts, getProductById } from '../api/products';
import { getCategories } from '../api/categories';
import Header from './header';
import reRender from '../utils/rerender';
import { addToCart } from '../utils/cart';
import USDFormat from '../utils/currencyFormat';

const ListItem = {
  async render() {
    const { data } = await getAllProducts();
    const categories = await getCategories();
    return /* html */`
      <!-- CONTENT -->
      <div id="content" class="py-4 bg-gray-50">
        <div class="flex flex-row justify-between my-5">
          <h2 class="text-3xl">Men's Collection</h2>
          <a href="#" class="text-xl">View all<i class="ri-arrow-right-s-fill align-middle text-2xl"></i></a>
        </div>
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          ${data.map((product) => /* html */`<div class="flex flex-col shadow-lg rounded-t-lg drop-shadow-xl bg-white">
          <div class="p-4 px-6 pb-2 grow">
            <a href="/product/${product.id}">
              <img
                src="${product.img}"
                alt=""/>
            </a>
          </div>
          <div class="p-4 px-6 pb-2">
            <h3 class="text-center"><a href="" class="text-lg font-semibold tracking-widest uppercase">${categories.data.map((category) => {
    if (category.id === product.categoryId) {
      return category.name;
    } return '';
  }).join('')}</a></h3>
            <h4 class="text-center leading-4 text-gray-500 py-2 hover:text-gray-900 font-medium">
              <a href ="/product/${product.id}" class="text-sm">${product.name}</a>
            </h4>
            <h3 class=" text-center"><a href="/product/${product.id}" class="text-lg text-teal-500 font-medium">${USDFormat(product.price)}</a></h3>
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
              <button  id="btn-add" data-id="${product.id}"
                class="btn-add bg-teal-500 hover:bg-teal-600 py-3.5 px-2 text-gray-50 uppercase font-medium text-xs flex flex-row justify-center transition-colors cursor-pointer">
                <i class="ri-shopping-cart-2-line align-text-bottom"></i>Add
                to cart
              </button>
              <a href="/product/${product.id}"
                class="bg-cyan-500 hover:bg-cyan-600 py-3.5 px-2 text-gray-50 uppercase font-medium text-xs flex flex-row justify-center transition-colors">
                View details
              </a>
            </div>
            </div>`).join('')}
          
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
        addToCart({ ...data, quantity: 1 });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item has add to cart successfully',
          showConfirmButton: false,
          timer: 500,
        });
        reRender(Header, '.cart');
      });
    });
  },
};

export default ListItem;
