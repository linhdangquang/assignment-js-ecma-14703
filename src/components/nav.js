import { NotExist, Exist } from '../utils/loguser';
import reRender from '../utils/rerender';
import Toast from '../pages/admin/components/toastAlert';

const Nav = {
  render() {
    return /* html */`
        <nav class="mt-2 flex flex-row items-center">
            <a href="/" class="text-gray-600 font-medium hover:text-purple-600 p-4 block">Home</a>
            <a href="/products" class="text-gray-600 font-medium hover:text-purple-600 p-4 block">Shop</a>
            <a href="" class="text-gray-600 font-medium hover:text-purple-600 p-4 block">Blog</a>
            <a href="" class="text-gray-600 font-medium hover:text-purple-600 p-4 block">News</a>
            <a href=""
            class="bg-purple-600 text-gray-50 hover:bg-purple-700 py-2 mr-2 px-5 rounded-full transition-colors"><i
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
  },
};

export default Nav;
