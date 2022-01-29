import BannerProducts from '../components/banner';
import Footer from '../components/footer';
import Header from '../components/header';
import ListItem from '../components/list-items';

const ProductsPage = {
  render() {
    return /* html */`
      <div class="container mx-auto p-5 font-montserrat">
        ${Header.render()}
        ${BannerProducts.render()}
        ${ListItem.render()}
        ${Footer.render()}
      </div>
    `;
  },
};
export default ProductsPage;
