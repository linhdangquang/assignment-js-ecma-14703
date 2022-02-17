import BannerProducts from '../components/banner';
import Footer from '../components/footer';
import Header from '../components/header';
import ListItem from '../components/list-items';

const ProductsPage = {
  async render() {
    return /* html */`
    <div class="container mx-auto p-5 font-montserrat">
        ${await Header.render()}
        ${BannerProducts.render()}
        ${await ListItem.render()}
        ${Footer.render()}
      </div>
    `;
  },
  afterRender() {
    Header.afterRender();
    ListItem.afterRender();
  },
};
export default ProductsPage;
