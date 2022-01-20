import NavAdmin from './components/navD';
import HeaderAdmin from './components/headerD';
import FooterAdmin from './components/footerD';
import ProductsTable from './components/products-list';

const ProductsAdmin = {
  async render() {
    return /* html */ `
    <div class="container-fluid admin-container flex flex-row bg-gray-100 font-fira">
      ${NavAdmin.render()}
      <div class="ml-4 rounded-l-2xl relative bg-white w-full">
        ${HeaderAdmin.render('Dashboard')}
        <div class="px-7 py-5">
          <table class="table w-full shadow-lg drop-shadow-sm border-t">
            <thead class="border-b-2 border-gray-400 pb-24">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox">
                  </label>
                </th>
                <th class="text-sm">ID</th>
                <th class="text-sm">Name</th>
                <th class="text-sm">Price</th>
                <th class="text-sm">Img</th>
                <th class="text-sm">Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                ${await ProductsTable.render()}
            </tbody>
          </table>
        </div>
          ${FooterAdmin.render()}
      </div>
    </div>
    `;
  },
};

export default ProductsAdmin;
