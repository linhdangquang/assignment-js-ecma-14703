import Footer from '../components/footer';
import Header from '../components/header';

const ProductSinglePage = {
  render() {
    return /* html */`
    <div class="container mx-auto p-5 font-montserrat">
      ${Header.render()}
      <main>
        <div class="py-4 grid grid-cols-2 gap-4 items-start">
          <div>
            <img src="https://bizweb.dktcdn.net/100/438/926/products/plainback8344aca45f634064bbc4b.png?v=1633577942410" alt="" class="">
          </div>
          <div class="pt-6">
            <div class="mb-4">
            <a href="" class="hover:text-green-700"><i class="ri-arrow-left-s-fill align-middle"></i><small>Go back</small></a>
            </div>
            <h3 class="text-xl font-bold pb-1">Lorem ipsum dolor, sit amet consectetur</h3>
            <h4 class="text-xl text-teal-500 font-semibold pb-4">$499.00</h4>
            <div class="pb-4">
              <div class="flex gap-1">
                <small class="font-medium">Availability: </small>
                <small class="text-teal-600">In stock</small>
              </div>
              <div class="flex gap-1">
                <small class="font-medium">Product Code: </small>
                <small class="text-teal-600">FJK898</small>
              </div>
            </div>
            <p class="pb-4 font-san text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam delectus dicta laboriosam mollitia eaque omnis nostrum repellendus molestias voluptatibus earum recusandae quisquam error et, sequi consequatur placeat autem consectetur est.  
            </p>

            <div>
                <form action="">
                  <div class="flex items-center gap-6 ">
                    <div class="form-control">
                      <label for="size" class="font-semibold text-sm pb-2">SIZE</label>
                      <select class="border-gray-300 focus:border-gray-400 ring-0 outline-none">
                        <option disabled="disabled" selected="selected">Select size</option> 
                        <option>XL</option> 
                        <option>L</option> 
                        <option>M</option> 
                        <option>S</option> 
                      </select> 
                    </div>
                    <div class="form-control w-1/6">
                      <label for="quantity" class="font-semibold text-sm pb-2">QTY</label>
                      <input type="number" name="quantity" id="quantity" value="1" min="1" class="border-gray-300 focus:border-gray-400 ring-0 outline-none">
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-4 py-4">
                    <button class="btn rounded-none bg-teal-500 border-0 hover:bg-teal-600">ADD TO CART</button>
                    <button class="btn btn-outline rounded-none border-gray-400">BUY NOW</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </main>
      ${Footer.render()}
  </div>
    `;
  },
};
export default ProductSinglePage;