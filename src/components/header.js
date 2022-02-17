import Nav from './nav';

const Header = {
  async render() {
    return /* html */`
    <div id="header" class="md:flex md:flex-row md:justify-between text-center items-center justify-center">
        <div class="logo flex flex-row justify-center"> 
            <div class="bg-gradient-to-r from-purple-600 to-red-600 w-10 h-10 rounded-lg"></div>
            <h1 class="text-3xl text-gray-600 ml-2">LinhDQ</h1>
        </div>
        ${await Nav.render()}
    </div>
      `;
  },
  afterRender() {
    Nav.afterRender();
  },
};

export default Header;
