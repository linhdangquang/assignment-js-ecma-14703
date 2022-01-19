const NewsLetter = {
  render() {
    return /* html */`
        <div class="rounded-md shadow-lg my-20 flex flex-row">
        <div class="lg:w-3/5 w-full bg-gradient-to-r from-black via-red-500 to-transparent rounded-lg text-gray-100 p-12">
          <div class="lg:w-1/2">
            <h3 class="text-2xl font-extrabold mb-4">Subscribe to get our latest news</h3>
            <p class="mb-4 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illum
              dolores provident officiis debitis necessitatibus tempora consequatur obcaecati aspernatur sunt!</p>
            <div>
              <input type="email" placeholder="Enter your email address"
                class="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:ring-0 border-0 mb-4">
              <button type="submit" class="bg-red-700 py-3 rounded-lg w-full">Subscribe</button>
            </div>
          </div>
        </div>
        <div class="lg:w-2/5 hidden w-full lg:flex lg:flex-row">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfvISrNlSxeiTMj7EgVESq8O7H23Io9kiTg&usqp=CAU"
            alt="" class="h-96">
        </div>
      </div>
        `;
  },
};

export default NewsLetter;
