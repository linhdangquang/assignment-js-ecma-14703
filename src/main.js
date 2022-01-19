import 'remixicon/fonts/remixicon.css';
import Navigo from 'navigo';
import HomePage from './pages/home';

const container = document.querySelector('#container');
const router = new Navigo('/', { linksSelector: 'a' });
const print = (content) => {
  container.innerHTML = content.render();
};

router.on({
  '/test': () => print(HomePage),
});
