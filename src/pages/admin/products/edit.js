import Swal from 'sweetalert2';
import axios from 'axios';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import validate from 'jquery-validation';
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
                  <input type="text" id="name" name="productName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full" value="${data.name}">
                </div> 
                <div class="form-control p-4 grid grid-cols-2 gap-4">
                  <div>
                    <label class="block mb-2 text-md font-medium text-gray-900">Price</label> 
                    <input type="number" id="price" name="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full" value="${data.price}">
                  </div>
                  <div>
                    <label class="block mb-2 text-md font-medium text-gray-900">In stock</label> 
                    <input type="number" id="inStock" name="stock" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full" value="${data.inStock}">
                  </div>
                </div> 
                <div class="form-control p-4">
                  <label class="block mb-2 text-md font-medium text-gray-900">Category</label> 
                  <select name="category" id="category" name="stock" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full">
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
                  <textarea type="text" id="desc" name="desc" class="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full  h-24">${data.desc}</textarea>
                </div>
                <div class="form-control p-4">
                   <label for="desc" class="block mb-2 text-md font-medium text-gray-900">Desc Content</label> 
                   <div id="editor" class="p-4">
                        ${data.desc2}
                   </div>
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
    let editor;
    ClassicEditor
      .create(document.querySelector('#editor'), {
        cloudServices: {
          tokenUrl: 'https://87213.cke-cs.com/token/dev/36e49b24a1a221f8523abc53088c3a1c6d4526fc2d53218c52e2a6bd0aae?limit=10',
          uploadUrl: 'https://87213.cke-cs.com/easyimage/upload/',
        },
      })
      .then((newEditor) => {
        editor = newEditor;
      })
      .catch((error) => {
        console.error(error);
      });
    const image = document.querySelector('#image');
    const imgPreview = document.querySelector('#imgPreview');
    let imgUploadSrc = '';
    const CLOUDINARY_PRESET_KEY = 'linhdqasm';
    const CLOUDINARY_API_URL = 'https://api.cloudinary.com/v1_1/linh-asm/image/upload';
    image.addEventListener('change', () => {
      imgPreview.src = URL.createObjectURL(image.files[0]);
    });

    $('#product-form').validate({
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
      },

      submitHandler() {
        async function editProduct() {
          const editorData = await editor.getData();
          const file = image.files[0];
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
                name: document.querySelector('#name').value.trimStart(),
                price: document.querySelector('#price').value,
                inStock: document.querySelector('#inStock').value,
                desc: document.querySelector('#desc').value.trimStart(),
                createdAt: currentDateTime,
                categoryId: document.querySelector('#category').value,
                img: imgUploadSrc || imgPreview.src,
                desc2: editorData,
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
        }
        editProduct();
      },
    });
  },
};

export default EditProductPage;
