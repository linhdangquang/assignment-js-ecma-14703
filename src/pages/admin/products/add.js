import axios from 'axios';
import Swal from 'sweetalert2';
import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import validate from 'jquery-validation';
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
          <div class="px-7 py-5 flex gap-6">
            <div class="w-1/2 shadow-lg drop-shadow-md bg-slate-100 rounded">
              <form id="addProductForm"  enctype="multipart/form-data">
                <div class="form-control p-4">
                  <label for="name" class="block mb-2 text-md font-medium text-gray-900">Name</label> 
                  <input type="text" autocomplete="off" name="productName" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full">
                  <small class="alert alert-error rounded-md py-2 hidden alert-box">
                    <div>
                    <span class="error-msg" ></span>
                    </div>
                  </small>
                </div> 
                <div class="form-control p-4 grid grid-cols-2 gap-4">
                  <div>
                    <label class="block mb-2 text-md font-medium text-gray-900">Price</label> 
                    <input type="number" id="price" name="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full">
                    <small class="alert alert-error rounded-md py-2 hidden alert-box">
                    <div>
                    <span class="error-msg" ></span>
                    </div>
                  </small>
                  </div>
                  <div>
                    <label class="block mb-2 text-md font-medium text-gray-900">In stock</label> 
                    <input type="number" id="inStock" name="stock" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full">
                    <small class="alert alert-error rounded-md py-2 hidden alert-box">
                    <div>
                    <span class="error-msg" ></span>
                    </div>
                  </small>
                  </div>
                </div> 
                <div class="form-control p-4">
                  <label class="block mb-2 text-md font-medium text-gray-900">Category</label> 
                  <select name="category" id="category" name="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full">
                    ${categories.data.map((category) => /* html */`
                    <option value="${category.id}">${category.name}</option>`)}
                  </select>
                  <small class="alert alert-error rounded-md py-2 hidden alert-box">
                  <div>
                  <span class="error-msg" ></span>
                  </div>
                </small>
                </div> 
                <div class="form-control p-4">
                  <label class=" block mb-2 text-md font-medium text-gray-900">Image</label> 
                  <input type="file" id="image" name="image" class="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg  block w-full  file:bg-pink-600 file:rounded-lg file:p-2 file:text-white file:border-0 cursor-pointer file:cursor-pointer file:active:scale-95 file:active:bg-pink-700">
                </div> 
                
                <div class="form-control p-4">
                  <label for="desc" class="block mb-2 text-md font-medium text-gray-900">Desc</label> 
                  <textarea type="text" id="desc" name="desc" class="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full  h-24"></textarea>
                  <small class="alert alert-error rounded-md py-2 hidden alert-box">
                  <div>
                  <span class="error-msg" ></span>
                  </div>
                </small>
                </div> 
                <div class="form-control p-4 pt-0 grid grid-cols-2 gap-4">
                  <button type="submit" class="btn btn-primary pt-1 ">add</button> 
                  <a href="/admin/products/products" class="btn pt-1 bg-rose-600 border-0 hover:bg-rose-700">Cancel</a>
                  </div>
              </form>
            </div>
            <div class="w-2/5 shadow-lg drop-shadow-md bg-slate-100 rounded" >
                <h3 class="text-xl text-center py-4 text-gray-600">Image Preview</h3>
                <img id="imgPreview" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="">
            </div>
          </div>

          ${FooterAdmin.render()}
        </div>
      </div>
    `;
  },
  afterRender() {
    NavAdmin.afterRender();
    const image = document.querySelector('#image');
    const imgPreview = document.querySelector('#imgPreview');
    const CLOUDINARY_PRESET_KEY = 'linhdqasm';
    const CLOUDINARY_API_URL = 'https://api.cloudinary.com/v1_1/linh-asm/image/upload';
    image.addEventListener('change', () => {
      imgPreview.src = URL.createObjectURL(image.files[0]);
    });

    $('#addProductForm').validate({
      rules: {
        productName: {
          required: true,
        },
        price: {
          required: true,
          min: 1,
        },
        stock: {
          required: true,
          min: 1,
        },
        category: {
          required: true,
        },
        desc: {
          required: true,
        },
        image: {
          required: true,
        },
      },
      messages: {
        productName: {
          required: 'Product name is required.',
        },
        price: {
          required: 'Price is required',
          min: 'Please enter a value greater than or equal to 1',
        },
        stock: {
          required: 'In stock is required',
          min: 'Please enter a value greater than or equal to 1',
        },
        category: {
          required: 'Category is required ',
        },
        desc: {
          required: 'Description is required',
        },
        image: {
          required: 'Image is required',
        },
      },

      submitHandler() {
        async function addProductFunc() {
          const file = image.files[0];
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', CLOUDINARY_PRESET_KEY);
          LoadingRequest.loading();
          const { data } = await axios.post(CLOUDINARY_API_URL, formData, { headers: { 'Content-Type': 'application/form-data' } }).catch(() => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Need Image',
              showConfirmButton: false,
              timer: 1500,
            });
            LoadingRequest.stopLoading();
          });
          addProduct({
            name: document.querySelector('#name').value.trimStart(),
            price: document.querySelector('#price').value,
            inStock: document.querySelector('#inStock').value,
            categoryId: document.querySelector('#category').value,
            desc: document.querySelector('#desc').value.trimStart(),
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
        }
        addProductFunc();
      },
    });
  },
};

export default AddProductPage;
