import axios from 'axios';
import Swal from 'sweetalert2';
import FooterAdmin from '../components/footerD';
import HeaderAdmin from '../components/headerD';
import NavAdmin from '../components/navD';
import { addProduct } from '../../../api/products';
import currentDateTime from '../../../utils/currentDateTime';
import LoadingRequest from '../components/loadingRequest';
import { getCategories } from '../../../api/categories';

const AddProductPage = {
  async render() {
    const categories = await getCategories();
    return /* html */`
      <div class="container-fluid admin-container flex flex-row bg-gray-100 font-fira">
        ${NavAdmin.render()}
        <div class="ml-4 rounded-l-2xl relative bg-white w-full">
          ${HeaderAdmin.render('add product')}
          <div class="px-7 py-5">
            <div class="w-1/2 shadow-lg drop-shadow-md bg-slate-100 rounded">
              <form id="addProductForm"  enctype="multipart/form-data">
                <div class="form-control p-4">
                  <label for="name" class="block mb-2 text-md font-medium text-gray-900">Name</label> 
                  <input type="text" autocomplete="off" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full">
                </div> 
                <div class="form-control p-4">
                  <label class="block mb-2 text-md font-medium text-gray-900">Price</label> 
                  <input type="number" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full">
                </div> 
                <div class="form-control p-4">
                  <label class="block mb-2 text-md font-medium text-gray-900">Category</label> 
                  <select name="category" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full">
                    ${categories.data.map((category) => /* html */`
                    <option value="${category.id}">${category.name}</option>`)}
                  </select>
                </div> 
                <div class="form-control p-4">
                  <label class=" block mb-2 text-md font-medium text-gray-900">Image</label> 
                  <input type="file" id="image" class="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg  block w-full  file:bg-pink-600 file:rounded-lg file:p-2 file:text-white file:border-0 cursor-pointer file:cursor-pointer file:active:scale-95 file:active:bg-pink-700">
                </div> 
                
                <div class="form-control p-4">
                  <label for="desc" class="block mb-2 text-md font-medium text-gray-900">Desc</label> 
                  <textarea type="text" id="desc" class="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full  h-24"></textarea>
                </div> 
                <div class="form-control p-4 pt-0 grid grid-cols-2 gap-4">
                  <button type="submit" class="btn btn-primary pt-1 ">add</button> 
                  <a href="/admin/products/products" class="btn pt-1 bg-rose-600 border-0 hover:bg-rose-700">Cancel</a>
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
    const formAddProduct = document.querySelector('#addProductForm');
    const CLOUDINARY_PRESET_KEY = 'linhdqasm';
    const CLOUDINARY_API_URL = 'https://api.cloudinary.com/v1_1/linh-asm/image/upload';
    formAddProduct.addEventListener('submit', async (event) => {
      event.preventDefault();
      const image = document.querySelector('#image').files[0];
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', CLOUDINARY_PRESET_KEY);
      LoadingRequest.loading();
      const { data } = await axios.post(CLOUDINARY_API_URL, formData, { headers: { 'Content-Type': 'application/form-data' } }).catch(() => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Add Failed',
          showConfirmButton: false,
          timer: 1500,
        });
        LoadingRequest.stopLoading();
      });
      console.log(data);
      addProduct({
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        categoryId: document.querySelector('#category').value,
        desc: document.querySelector('#desc').value,
        createdAt: currentDateTime,
        img: data.url,
      }).then(() => {
        LoadingRequest.stopLoading();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your product has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.href = '/admin/products/products';
        }, 1500);
      });
    });
  },
};

export default AddProductPage;
