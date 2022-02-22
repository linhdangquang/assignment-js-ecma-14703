import 'remixicon/fonts/remixicon.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import Navigo from 'navigo';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import NotFoundPage from './utils/404page';
import SearchPage from './pages/search';
import CategoryProducts from './pages/productsCategory';
// ADMIN
import Dashboard from './pages/admin/dashboard';
import ProductsAdmin from './pages/admin/products/products';
import AddProductPage from './pages/admin/products/add';
import EditProductPage from './pages/admin/products/edit';
import ProductsPage from './pages/products';
import ProductSinglePage from './pages/single-product';
import CartPage from './pages/cart';
import CategoriesPage from './pages/admin/categories/categories';
import AddCategoryPage from './pages/admin/categories/add';

const container = document.querySelector('#container');
const router = new Navigo('/', { linksSelector: 'a', hash: true });

const print = async (content, id) => {
  container.innerHTML = await content.render(id);
  if (content.afterRender) content.afterRender(id);
};

router.notFound(() => {
  print(NotFoundPage);
  document.title = '404 Not Found';
});

router.on('/admin/*', () => {}, {
  before(done) {
    if (JSON.parse(localStorage.getItem('user'))) {
      const { id } = JSON.parse(localStorage.getItem('user'));
      if (id === 2) {
        done();
      } else {
        document.location.href = '/';
      }
    } else {
      document.location.href = '/';
    }
  },
});

router.on('/signup', () => {}, {
  before(done) {
    if (localStorage.getItem('user')) {
      document.location.href = '/';
    } else {
      done();
    }
  },
});

router.on('/login', () => {}, {
  before(done) {
    if (localStorage.getItem('user')) {
      document.location.href = '/';
    } else {
      done();
    }
  },
});

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
  '/product/:id': ({ data }) => {
    const { id } = data;
    print(ProductSinglePage, id);
  },
  '/category/:id': ({ data }) => {
    const { id } = data;
    print(CategoryProducts, id);
  },
  '/cart': () => {
    print(CartPage);
    document.title = 'Cart';
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
  '/search/:keyword': ({ data }) => {
    const { keyword } = data;
    print(SearchPage, keyword);
    document.title = `Search by ${keyword}`;
  },
  '/admin/categories/categories': () => {
    print(CategoriesPage);
    document.title = 'Categories';
  },
  '/admin/categories/add': () => {
    print(AddCategoryPage);
    document.title = 'Add Category';
  },
});
router.resolve();
