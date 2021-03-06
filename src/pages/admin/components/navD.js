import Toast from './toastAlert';

const navDData = [
  { name: 'Dashboard', url: '/admin/dashboard', icon: 'ri-dashboard-line' },
  { name: 'Products', url: '/#/admin/products/products', icon: 'ri-handbag-line' },
  { name: 'Categories', url: '/admin/categories/categories', icon: 'ri-list-check-2' },
  { name: 'Orders', url: '/admin/orders/orders', icon: 'ri-order-play-line' },
  { name: 'Settings', url: '/admin/settings', icon: 'ri-settings-2-line' },
];

const NavAdmin = {
  render() {
    return /* html */ `
    <nav class ="min-h-screen flex flex-row w-64 pr-14 ">
    <div class="min-h-screen h-full flex flex-col w-56 bg-white rounded-r-3xl z-50 overflow-hidden fixed top-0 left-0  ">
    <div class="flex items-center justify-center h-20 shadow-md">
        <h1 class="text-3xl font-black uppercase text-pink-600">LinhDQ</h1>
    </div>
    <ul class="flex flex-col py-4">
        ${navDData.map((d) => /* html */`
        <li>
            <a href="${d.url}" class="block items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="text-sm font-medium flex items-center pl-12"><i class="${d.icon} text-xl"></i>
                    ${d.name}
                </span>
            </a>
        </li>
        `).join('')}
        <li>
            <a  class="logout-btn block items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 cursor-pointer">
                <span class="text-sm font-medium flex items-center pl-12"><i class="ri-logout-circle-line text-xl"></i>
                    Logout
                </span>
            </a>
        </li>
    </ul>
    </div>
</nav>
    `;
  },
  afterRender() {
    if (document.querySelector('.logout-btn')) {
      document.querySelector('.logout-btn').addEventListener('click', () => {
        localStorage.removeItem('user');
        Toast.fire({
          icon: 'info',
          title: 'You have logout ',
        });
        document.location.href = '/';
      });
    }
  },
};
export default NavAdmin;
