import Swal from 'sweetalert2';
import dt from 'datatables.net';
import $ from 'jquery';
import NavAdmin from '../components/navD';
import HeaderAdmin from '../components/headerD';
import FooterAdmin from '../components/footerD';
import CategoriesList from './components/categoriesList';
import { deleteCategory } from '../../../api/categories';
import LoadingRequest from '../components/loadingRequest';
import reRender from '../../../utils/rerender';

const CategoriesPage = {
  async render() {
    dt();
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
                <table id="table_id" class="w-full row-border table-auto table ">
                  <thead class="pb-24">
                    <tr class="p-4 text-center border-gray-900 ">
                      <th class="text-sm">ID</th>
                      <th class="text-sm">Name</th>
                      <th class="text-sm">Quantity of products</th>
                      <th ></th>
                    </tr>
                  </thead>
                  
                  <tbody>
                      ${await CategoriesList.render()}
                  </tbody>
                  </table>
                </div>
                ${FooterAdmin.render()}
        </div>
      </div>
    `;
  },
  afterRender() {
    NavAdmin.afterRender();
    $(() => {
      $('#table_id').DataTable({
        pagingType: 'full_numbers',
      });
    });
    const btns = document.querySelectorAll('.btn-del-category');
    btns.forEach((btn) => {
      const id = btn.dataset.category;
      btn.addEventListener('click', () => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3b82f6',
          cancelButtonColor: '#f43f5e',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            LoadingRequest.loading();
            deleteCategory(id).then(() => {
              reRender(CategoriesPage, '#container');
              LoadingRequest.stopLoading();
              Swal.fire(
                'Deleted!',
                'Product has been deleted.',
                'success',
              );
            });
          }
        });
      });
    });
  },
};

export default CategoriesPage;
