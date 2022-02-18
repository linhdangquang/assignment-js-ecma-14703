import Swal from 'sweetalert2';
import axios from 'axios';
import { getProductById, updateProduct } from '../../../api/products';
import { getCategories } from '../../../api/categories';
import FooterAdmin from '../components/footerD';
import HeaderAdmin from '../components/headerD';
import NavAdmin from '../components/navD';
import Toast from '../components/toastAlert';
import currentDateTime from '../../../utils/currentDateTime';
import LoadingRequest from '../components/loadingRequest';

const EditProductPage = {
  async render(id) {
    const { data } = await getProductById(id);
    const categories = await getCategories();
    console.log(categories.data);
    return /* html */`
      <div class="container-fluid admin-container flex flex-row bg-gray-100 font-fira">
        ${NavAdmin.render()}
        <div class="ml-4 rounded-l-2xl relative bg-white w-full">
          ${HeaderAdmin.render('add product')}
          <div class="px-7 py-5 flex gap-6">
            <div class="w-1/2 shadow-lg drop-shadow-md bg-slate-100 rounded">
              <form enctype="multipart/form-data" id="product-form">
                <div class="form-control p-4">
                  <label for="name" class="block mb-2 text-md font-medium text-gray-900">Name</label> 
                  <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full" value="${data.name}">
                </div> 
                <div class="form-control p-4 grid grid-cols-2 gap-4">
                  <div>
                    <label class="block mb-2 text-md font-medium text-gray-900">Price</label> 
                    <input type="number" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full" value="${data.price}">
                  </div>
                  <div>
                    <label class="block mb-2 text-md font-medium text-gray-900">In stock</label> 
                    <input type="number" id="inStock" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full" value="${data.inStock}">
                  </div>
                </div> 
                <div class="form-control p-4">
                  <label class="block mb-2 text-md font-medium text-gray-900">Category</label> 
                  <select name="category" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full">
                    ${categories.data.map((category) => /* html */`
                    <option value="${category.id}" ${data.categoryId === category.id ? 'selected' : ''}>${category.name}</option>`)}
                  </select>
                </div> 
                <div class="form-control p-4">
                  <label class="block mb-2 text-md font-medium text-gray-900">Image</label> 
                  <input type="file" id="image" class="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg  block w-full  file:bg-pink-600 file:rounded-lg file:p-2 file:text-white file:border-0 cursor-pointer file:cursor-pointer file:active:scale-95 file:active:bg-pink-700">
                </div> 
                <div class="form-control p-4">
                  <label for="desc" class="block mb-2 text-md font-medium text-gray-900">Desc</label> 
                  <textarea type="text" id="desc" class="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full  h-24">${data.desc}</textarea>
                </div> 
                <div class="form-control p-4 pt-0 grid grid-cols-2 gap-4">
                  <button class="btn btn-primary pt-1">save</button> 
                  <a href="/admin/products/products" class="btn pt-1 bg-rose-600 border-0 hover:bg-rose-700">Cancel</a>
                  </div>
              </form>
            </div>
            <div class="w-2/5 shadow-lg drop-shadow-md bg-slate-100 rounded" >
              <h3 class="text-xl text-center py-4 text-gray-600">Image Preview</h3>
              <img id="imgPreview" src="${data.img}" alt="">
            </div>
          </div>

          ${FooterAdmin.render()}
        </div>
      </div>
    `;
  },
  afterRender(id) {
    NavAdmin.afterRender();
    const form = document.getElementById('product-form');
    const image = document.querySelector('#image');
    const imgPreview = document.querySelector('#imgPreview');
    let imgUploadSrc = '';
    const CLOUDINARY_PRESET_KEY = 'linhdqasm';
    const CLOUDINARY_API_URL = 'https://api.cloudinary.com/v1_1/linh-asm/image/upload';
    image.addEventListener('change', () => {
      imgPreview.src = URL.createObjectURL(image.files[0]);
    });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const file = image.files[0];
      LoadingRequest.loading();
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_PRESET_KEY);
        const { data } = await axios.post(CLOUDINARY_API_URL, formData, { headers: { 'Content-Type': 'application/form-data' } }).catch(() => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Add Image failed',
            showConfirmButton: false,
            timer: 1500,
          });
          LoadingRequest.stopLoading();
        });
        imgUploadSrc = data.url;
      }
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3b82f6',
        confirmButtonText: 'Save',
        denyButtonText: 'Don\'t save',
      }).then((result) => {
        if (result.isConfirmed) {
          LoadingRequest.loading();
          updateProduct({
            id,
            name: document.querySelector('#name').value,
            price: document.querySelector('#price').value,
            inStock: document.querySelector('#inStock').value,
            desc: document.querySelector('#desc').value,
            createdAt: currentDateTime,
            categoryId: document.querySelector('#category').value,
            img: imgUploadSrc || imgPreview.src,
          }).then(() => {
            LoadingRequest.stopLoading();
            Toast.fire({
              icon: 'success',
              title: 'Saved',
            });
            document.location.href = '/admin/products/products';
          });
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info');
        }
      });
    });
  },
};

export default EditProductPage;
