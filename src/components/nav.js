import { NotExist, Exist } from '../utils/loguser';
import reRender from '../utils/rerender';
import Toast from '../pages/admin/components/toastAlert';
import { getCategories } from '../api/categories';

const Nav = {
  async render() {
    const categories = await getCategories();
    // console.log(categories);
    return /* html */`
        <nav class="mt-2 flex flex-row items-center">
            <a href="/" class="text-gray-600 font-medium hover:text-purple-600 p-4 block">Home</a>
            <a href="/products" class="text-gray-600 font-medium hover:text-purple-600 p-4 block">Shop</a>
            <div class="dropdown dropdown-hover dropdown-end">
                <a href="/products" tabindex="0" class="text-gray-600 font-medium hover:text-purple-600 p-4 block">Categories</a>
                <ul tabindex="0" class="p-2 -mt-4 mr-4 bg-purple-400 shadow menu dropdown-content  w-52 border-purple-500 border-2 rounded-box">
                  ${categories.data.map((category) => `<li><a href="/category/${category.id}" class="active:bg-purple-600 text-white">${category.name}</a></li>`).join('')}
                </ul>
            </div>
            <a href="" class="text-gray-600 font-medium hover:text-purple-600 p-4 block">Blog</a>
            <a href="" class="text-gray-600 font-medium hover:text-purple-600 p-4 block">News</a>
            <div class="">
            <form id="search-form" class="relative pt-4">
              <p id="search-label" class="search-label px-2 py-1 mt-2  mr-3 rounded-full hover:bg-gray-400 cursor-pointer"><i id="search-label" class="ri-search-line text-xl align-bottom"></i></p>
              <input type="text" name="q" id="search-input" class="search-input absolute drop-shadow-xl border-gray-200 rounded-sm right-3/4 hidden translate-x-full z-50 transition-all text-black" placeholder="Search" autocomplete="off">
              <button type="submit" id="submit"></button>
            </form>
            </div>
            <a href="/cart"
            class="cart bg-purple-600 text-gray-50 hover:bg-purple-700 py-2 mr-2 px-4 rounded-full transition-colors"><i
                class="ri-shopping-bag-line align-bottom"></i>(0)</a>
            ${localStorage.getItem('user') ? Exist : NotExist}
            
        </nav>
        `;
  },
  afterRender() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const userEmail = document.querySelector('#user-email');
      if (user.id === 2) {
        document.querySelector('#dashboard-link').innerHTML = '<a href="/#/admin/dashboard">Dashboard</a>';
      }
      userEmail.innerHTML = user.email;
      document.querySelector('#user-first-letter').innerHTML = user.email.slice(0, 1);
      document.querySelector('#user-name').innerHTML = user.email.slice(0, user.email.search('@'));
    }
    if (document.querySelector('#logout')) {
      document.querySelector('#logout').addEventListener('click', () => {
        localStorage.removeItem('user');
        reRender(Nav, 'nav');
        Toast.fire({
          icon: 'info',
          title: 'You have logout ',
        });
      });
    }
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      const sumQuantity = cart.map((item) => item.quantity).reduce((prev, cur) => prev + cur, 0);
      document.querySelector('.cart').innerHTML = `<i
      class="ri-shopping-bag-line align-bottom"></i>(${sumQuantity})`;
    }
    const searchLabel = document.querySelector('.search-label');
    const searchInput = document.querySelector('.search-input');
    const searchForm = document.querySelector('#search-form');
    searchLabel.addEventListener('click', () => {
      searchInput.classList.toggle('active-block');
    });
    document.addEventListener('click', (e) => {
      if (e.target.id !== 'search-input' && e.target.id !== 'search-label') {
        searchInput.classList.remove('active-block');
      }
    });
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (searchInput.value === '') {
        Toast.fire({
          icon: 'warning',
          title: 'Please enter a keyword',
        });
      } else {
        document.location.href = `/search/${searchInput.value}`;
        reRender(Nav, 'nav');
      }
    });
  },
};

export default Nav;
