import Header from '../components/header';
import Footer from '../components/footer';
import HeroSections from '../components/hero-section';
import NewsLetter from '../components/news-letter';
import ListItem from '../components/list-items';

const HomePage = {
  async render() {
    return /* html */ `
        <div class="container mx-auto p-5 font-montserrat">
            ${await Header.render()}
            ${HeroSections.render()}
            ${await ListItem.render()}
            ${NewsLetter.render()}
            ${Footer.render()}
        </div>
        `;
  },
  afterRender() {
    Header.afterRender();
    ListItem.afterRender();
  },

};
export default HomePage;
