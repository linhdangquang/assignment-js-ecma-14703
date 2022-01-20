import 'remixicon/fonts/remixicon.css';
import Navigo from 'navigo';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
// ADMIN
import Dashboard from './pages/admin/dashboard';
import ProductsAdmin from './pages/admin/products';

const container = document.querySelector('#container');
const router = new Navigo('/', { linksSelector: 'a' });
const print = (content) => {
  container.innerHTML = content.render();
};
const printAwait = async (content) => {
  container.innerHTML = await content.render();
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
  '/admin/dashboard': () => {
    print(Dashboard);
    document.title = 'Dashboard';
  },
  '/admin/settings': () => {
    print(Dashboard);
    document.title = 'Dashboard';
  },
  '/admin/products': () => {
    printAwait(ProductsAdmin);
    document.title = 'Products';
  },
});
router.resolve();
