const ListItem = {
  render() {
    return /* html */`
      <!-- CONTENT -->
      <div id="content" class="py-4 bg-gray-50">
        <div class="flex flex-row justify-between my-5">
          <h2 class="text-3xl">Men's Collection</h2>
          <a href="#" class="text-xl">View all<i class="ri-arrow-right-s-fill align-middle text-2xl"></i></a>
        </div>
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div class="shadow-lg rounded-t-lg drop-shadow-xl bg-white">
            <div class="p-4 px-6 pb-2">
              <a href="">
                <img
                  src="https://cdn.laredoute.com/products/3/1/b/31bad1f2bc0ae2bba3286d7b5b02b6e9.jpg?imgopt=twic"
                  alt=""/>
              </a>
            </div>
            <div class="p-4 px-6 pb-2">
              <h3 class="text-center"><a href="" class="text-lg font-semibold tracking-widest uppercase">LEVIS</a></h3>
              <h4 class="text-center leading-4 text-gray-500 py-2 hover:text-gray-900 font-medium">
                <a href class="text-sm">Áo thun siêp cấp vip pro đẹp nhất.</a>
              </h4>
              <h3 class=" text-center"><a href="" class="text-lg text-teal-500 font-medium">$499.00</a></h3>
              <div class="flex flex-row my-3 items-center justify-center">
                <div class="border-2 border-gray-300 text-gray-400 rounded-md px-2 py-1 mr-2">
                  XL
                </div>
                <div class="border-2 border-gray-300 text-gray-400 rounded-md px-2 py-1 mr-2">
                  XX
                </div>
                <div class="border-2 border-gray-300 text-gray-400 rounded-md px-2 py-1 mr-2">
                  L
                </div>
                <div class="border-2 border-gray-300 text-gray-400 rounded-md px-2 py-1 mr-2">
                  M
                </div>
                <div class="border-2 border-gray-300 text-gray-400 rounded-md px-2 py-1 mr-2">
                  S
                </div>
              </div>
              
              </div>
              <div class="w-full p-0 m-0 grid grid-cols-2 gap-2">
                <a href=""
                  class="bg-teal-500 hover:bg-teal-600 py-3.5 px-2 text-gray-50 uppercase font-medium text-xs flex flex-row justify-center transition-colors">
                  <i class="ri-shopping-cart-2-line align-text-bottom"></i>Add
                  to cart
                </a>
                <a href=""
                  class="bg-cyan-500 hover:bg-cyan-600 py-3.5 px-2 text-gray-50 uppercase font-medium text-xs flex flex-row justify-center transition-colors">
                  View details
                </a>
              </div>
              </div>
        </div>
    </div>
      
        `;
  },
};

export default ListItem;
