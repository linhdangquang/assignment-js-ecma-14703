import Swal from 'sweetalert2';
import FooterAdmin from '../components/footerD';
import HeaderAdmin from '../components/headerD';
import NavAdmin from '../components/navD';
import LoadingRequest from '../components/loadingRequest';
import { addCategory } from '../../../api/categories';

const AddCategoryPage = {
  render() {
    return /* html */`
      <div class="container-fluid admin-container flex flex-row bg-gray-100 font-fira">
      ${NavAdmin.render()}
          <div class="ml-4 rounded-l-2xl relative bg-white w-full">
            ${HeaderAdmin.render('add category')}
            <div class="px-7 py-5">
              <div class="w-1/2 shadow-lg drop-shadow-md bg-slate-100 rounded">
                <form id="addForm"  enctype="multipart/form-data">
                  <div class="form-control p-4">
                    <label class="block mb-2 text-md font-medium text-gray-900">ID</label> 
                    <input type="text" autocomplete="off" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full" placeholder="Auto" disabled>
                  </div> 
                  <div class="form-control p-4">
                    <label for="name" class="block mb-2 text-md font-medium text-gray-900">Name</label> 
                    <input type="text" autocomplete="off" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full">
                  </div> 
                  <div class="form-control p-4 pt-0 grid grid-cols-2 gap-4">
                    <button type="submit" class="btn btn-primary pt-1 ">add</button> 
                    <a href="/admin/categories/categories" class="btn pt-1 bg-rose-600 border-0 hover:bg-rose-700">Cancel</a>
                    </div>
                </form>
              </div>
            </div>

            ${FooterAdmin.render()}
          </div>
        </div>
    `;
  },
  afterRender() {
    NavAdmin.afterRender();
    const addCategoryForm = document.querySelector('#addForm');
    addCategoryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      LoadingRequest.loading();
      addCategory({
        name: document.querySelector('#name').value,
      }).then(() => {
        LoadingRequest.stopLoading();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your category has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.href = '/admin/categories/categories';
        }, 1500);
      });
    });
  },
};

export default AddCategoryPage;
