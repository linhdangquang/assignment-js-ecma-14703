const NotFoundPage = {
  async render() {
    return /* html */`
        <div class="container mx-auto font-montserrat">
            <main class="relative" >
              <div class="flex items-center justify-center">
              <img src="https://res.cloudinary.com/linh-asm/image/upload/v1645099396/pixeltrue-error-1_k9wz1w.svg" alt="" class="h-5/6 w-3/4">
              </div>
              <div class="w-2/4 absolute bottom-10 left-1/4">
                    <h1 class="text-6xl text-rose-600 font-black text-center mb-4">
                      PAGE NOT FOUND!
                    </h1>
                    <div class="flex justify-between px-6">
                      <a href="/" class="btn bg-sky-500 hover:bg-sky-600 border-0 rounded-2xl">Go HomePage</a>
                      <button class="btn bg-sky-500 hover:bg-sky-600 border-0 rounded-2xl">Contact</button>
                    </div>
              </div>
            </main>
        </div>
        `;
  },
};

export default NotFoundPage;
