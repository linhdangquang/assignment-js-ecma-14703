import Stats from './stats';

const HeaderAdmin = {
  render(pageTile) {
    return /* html */`
      <div class=" rounded-l-2xl bg-gradient-to-br from-pink-300 to-pink-600 bg-pink-500 md:px-4 pb-24 mx-auto w-full shadow-md">
        <nav class="flex justify-between items-center py-8">
          <h1 class="px-4 pt-4 text-white text-2xl uppercase">${pageTile}</h1>
          <div class="mr-4 flex gap-2 items-center">
            <form action="" >
                <div class="relative flex shadow-md">
                    <span class="absolute items-center pt-2 px-2 text-gray-400 text-xl"><i class="ri-search-line"></i></span>
                    <input type="text" placeholder="Search here..." class="rounded pl-8 placeholder:italic focus:ring-pink-700 border-0 focus:ring-2">
                </div>
            </form>
            <div class="w-11 h-11 rounded-full"><a href=""><img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" class="rounded-full" ></a></div>
          </div>
        </nav>
        ${Stats.render()}
      </div>
    `;
  },
};

export default HeaderAdmin;
