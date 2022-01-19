const ListItem = {
  render() {
    return /* html */`
      <!-- CONTENT -->
      <div id="content" class="">
        <div class="flex flex-row justify-between my-5">
          <h2 class="text-3xl">Men's Collection</h2>
          <a href="#" class="text-xl">View all<i class="ri-arrow-right-s-fill align-middle text-2xl"></i></a>
        </div>
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div class="shadow-lg rounded-t-lg">
            <a href="">
              <img
                src="https://revolutionclothing.cdn.vccloud.vn/wp-content/uploads/2021/05/186491751_216504243429024_2306377062415963798_n-500x500.jpg"
                alt="" class="rounded-tl-lg rounded-tr-lg" />
            </a>
            <div class="p-5 pb-2">
              <h3><a href="">Super Idol</a></h3>
              <div class="flex flex-row my-3">
                <div class="bg-black h-5 w-5 rounded-full shadow-md drop-shadow-lg mr-2"></div>
                <div class="bg-blue-800 h-5 w-5 rounded-full shadow-md drop-shadow-lg mr-2"></div>
                <div class="bg-white h-5 w-5 rounded-full shadow-md drop-shadow-lg mr-2"></div>
                <div class="bg-red-800 h-5 w-5 rounded-full shadow-md drop-shadow-lg mr-2"></div>
                <div class="bg-green-800 h-5 w-5 rounded-full shadow-md drop-shadow-lg mr-2"></div>
              </div>
              <div class="flex flex-row my-3">
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
              <div class="flex flex-col md:flex-row justify-between">
                <a href=""
                  class="bg-indigo-600 hover:bg-indigo-700 drop-shadow-2xl shadow-md shadow-indigo-400 transition-colors rounded-full py-2.5 px-2 text-gray-50 text-sm flex flex-row justify-center my-2">
                  <i class="ri-shopping-cart-2-line align-text-bottom"></i>Add
                  to cart
                </a>
                <a href=""
                  class="bg-emerald-500 hover:bg-emerald-600 drop-shadow-2xl  shadow-md shadow-emerald-400 transition-colors rounded-full py-2.5 px-2 text-gray-50 text-sm flex flex-row justify-center my-2">
                  <i class="ri-arrow-right-line align-text-top"></i>View details
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
      
        `;
  },
};

export default ListItem;
