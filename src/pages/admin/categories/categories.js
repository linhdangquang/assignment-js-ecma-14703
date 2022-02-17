import NavAdmin from '../components/navD';
import HeaderAdmin from '../components/headerD';
import FooterAdmin from '../components/footerD';
import CategoriesList from './components/categoriesList';

const CategoriesPage = {
  async render() {
    return /* html */`
      <div class="container-fluid admin-container flex flex-row bg-gray-100 font-fira">
        ${NavAdmin.render()}
        <div class="ml-4 rounded-l-2xl relative bg-white w-full">
                ${HeaderAdmin.render('Categories')}
                <div class="px-7 py-5">
                  <div class="mb-1 px-4 rounded-t-xl py-3 shadow-md border-b-2 border-gray-300 bg-slate-300 ">
                  <div class="flex flex-wrap items-center">
                    <div class="relative w-full max-w-full flex-grow flex-1" id="product-table">
                      <h3 class="font-semibold text-lg text-gray-500">
                          Categories List
                      </h3>
                    </div>
                    <a href="/admin/categories/add" class=" text-white btn btn-accent">
                    <span class="pr-1"><i class="ri-add-circle-line align-middle"></i></span> Add
                    </a>
                  </div>
                </div>
                <table class="w-full table-auto table  shadow-lg drop-shadow-sm">
                  <thead class="pb-24">
                    <tr class="p-4 m-4">
                      <th>
                        <label>
                          <input type="checkbox" class="checkbox">
                        </label>
                      </th>
                      <th class="text-sm">ID</th>
                      <th class="text-sm">Name</th>
                      <th class="text-sm">Quantity of products</th>
                      <th></th>
                    </tr>
                  </thead>
                  
                  <tbody>
                      ${await CategoriesList.render()}
                  </tbody>
                  </table>
                  <div class="flex justify-end p-2">
                    <div class="btn-group">
                      <button class="btn btn-sm"><i class="ri-arrow-left-s-line"></i></button> 
                      <button class="btn btn-sm">1</button> 
                      <button class="btn btn-sm">2</button> 
                      <button class="btn btn-sm">3</button> 
                      <button class="btn btn-sm btn-disabled">...</button> 
                      <button class="btn btn-sm">99</button> 
                      <button class="btn btn-sm">100</button>
                      <button class="btn btn-sm"><i class="ri-arrow-right-s-line"></i></button>
                    </div>
                  </div>
                </div>
                ${FooterAdmin.render()}
        </div>
      </div>
    `;
  },
};

export default CategoriesPage;
