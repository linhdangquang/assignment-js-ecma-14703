import Header from '../components/header';
import Footer from '../components/footer';
import { getProductsByCategory } from '../api/categories';
import ProductCard from '../components/productCard';
import Breadcrumbs from '../components/breadcrumbs';

const CategoryProducts = {
  async render(id) {
    const { data } = await getProductsByCategory(id);
    const products = await Promise.all(data.products.map((product) => ProductCard.render(product)));
    console.log(products);
    return /* html */ `
        <div class="container mx-auto p-5 font-montserrat">
            ${await Header.render()}
            ${Breadcrumbs.render(data.name)}
              <div id="content" class="py-4 bg-gray-50">
                  <div class="flex flex-row justify-between my-2">
                    <h2 class="text-2xl">${data.name}</h2>
                    
                  </div>
                  ${data.products.length === 0 ? /* html */'<div class="flex items-center justify-center"><img class="h-[32rem]" src="https://www.shuvautsav.com/frontend/dist/images/logo/no-item-found-here.png" alt=""></div>' : `<div class="grid grid-cols-4 gap-10 ">
                ${products.join(' ')}
              </div>`}
              </div>
            ${Footer.render()}
        </div>
        `;
  },
  afterRender() {
    Header.afterRender();
    ProductCard.afterRender();
  },

};
export default CategoryProducts;
