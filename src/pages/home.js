import Header from '../components/header';
import Footer from '../components/footer';
import HeroSections from '../components/hero-section';
import NewsLetter from '../components/news-letter';
import ListItem from '../components/list-items';

const HomePage = {

  render() {
    return /* html */ `
        <div class="container mx-auto p-5 font-montserrat">
            ${Header.render()}
            ${HeroSections.render()}
            ${ListItem.render()}
            ${NewsLetter.render()}
            ${Footer.render()}
        </div>
        `;
  },

};
export default HomePage;
