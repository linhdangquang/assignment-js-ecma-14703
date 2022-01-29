import 'remixicon/fonts/remixicon.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import Navigo from 'navigo';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
// ADMIN
import Dashboard from './pages/admin/dashboard';
import ProductsAdmin from './pages/admin/products/products';
import AddProductPage from './pages/admin/products/add';
import EditProductPage from './pages/admin/products/edit';
import ProductsPage from './pages/products';
import ProductSinglePage from './pages/single-product';

const container = document.querySelector('#container');
const router = new Navigo('/', { linksSelector: 'a', hash: true });

const print = async (content, id) => {
  container.innerHTML = await content.render(id);
  if (content.afterRender) content.afterRender(id);
};

router.on({
  '/': () => print(HomePage),
  '/login': () => {
    print(LoginPage);
    document.title = 'Login';
  },
  '/signup': () => {
    print(SignUpPage);
    document.title = 'Sign Up';
  },
  '/products': () => {
    print(ProductsPage);

    document.title = 'Products';
  },
  '/product': () => {
    print(ProductSinglePage);
  },
  '/admin/dashboard': () => {
    print(Dashboard);
    document.title = 'Dashboard';
  },
  '/admin/settings': () => {
    print(Dashboard);
    document.title = 'Dashboard';
  },
  '/admin/products/products': () => {
    print(ProductsAdmin);
    document.title = 'Products';
  },
  '/admin/products/add': () => {
    print(AddProductPage);
    document.title = 'Add Product';
  },
  '/admin/products/edit/:id': ({ data }) => {
    const { id } = data;
    print(EditProductPage, id);
    document.title = 'Edit Product';
  },
});
router.resolve();
