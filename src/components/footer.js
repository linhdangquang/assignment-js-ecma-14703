const Footer = {
  render() {
    return /* html */ `
        <!-- FOOTER -->
      <div id="footer" class="border-t-2 border-gray-300">
        <div class="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
            <div class="flex flex-wrap justify-center">
            <ul class="flex items-center space-x-4">
                <li><a href="">Home</a> </li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Terms</a></li>
            </ul>
            </div>
            <div class="flex justify-center mt-4 lg:mt-0 text-2xl">
            <a href="#">
                <i class="ri-facebook-circle-fill"></i>
            </a>
            <a href="#" class="ml-3">
                <i class="ri-twitter-fill"></i>
            </a>
            <a href="#" class="ml-3">
                <i class="ri-instagram-fill"></i>
            </a>
            <a href="#" class="ml-3">
                <i class="ri-linkedin-fill"></i>
            </a>
            </div>
        </div>
        <p class="w-full text-center font-light">Copyright &copy; 2022 DQL</p>
        <!-- SCROLL UP -->
        <a href="#" id="scroll-up" class=" text-black text-4xl fixed bottom-2 right-4 hover:text-red-400 transition-all">
            <i class="ri-arrow-up-circle-line"></i>
        </a>
    </div>
        `;
  },
};

export default Footer;
