import Header from '../components/header';
import Footer from '../components/footer';
import Breadcrumbs from '../components/breadcrumbs';
import { searchProduct } from '../api/products';
import ProductCard from '../components/productCard';
import Nav from '../components/nav';

const SearchPage = {
  async render(keyword) {
    const { data } = await searchProduct(keyword);
    const products = await Promise.all(data.map((product) => ProductCard.render(product)));
    return /* html */`
        <div class="container mx-auto p-5 font-montserrat">
        ${await Header.render()}
        ${Breadcrumbs.render('Search')}
          <div id="content" class="py-4 bg-gray-50">
              <div class="pb-4">
                <h3 class="text-right text-xl font-medium">Found <strong>${data.length} </strong>items by <strong>"${keyword}"</strong></h3>
              </div>
              ${data.length === 0 ? /* html */'<div class="flex items-center justify-center"><img class="h-[32rem]" src="https://res.cloudinary.com/linh-asm/image/upload/v1645376182/empty_search_aky3fu.png" alt=""></div>' : `<div class="grid grid-cols-4 gap-10 ">
                ${products.join(' ')}
              </div>`}
              
          </div>
        ${Footer.render()}
        </div>
    `;
  },
  afterRender() {
    Nav.afterRender();
  },
};

export default SearchPage;
