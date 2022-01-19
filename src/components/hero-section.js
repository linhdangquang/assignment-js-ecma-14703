const HeroSections = {
  render() {
    return /* html */`
    <div id="hero-section" class="md:flex md:flex-row mt-20">
        <div class="md:w-2/5 flex flex-col justify-center items-center">
          <h2 class="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">
            Some title about hero
          </h2>
          <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
            Our brand tagline here.
          </p>
          <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
            Our brand motto goes here.
          </p>
          <a href="#"
            class="via-red-500 bg-gradient-to-r gradient-transition from-pink-600 to-red-700 bg-left hover:bg-right size-300 transition-all duration-500 ease-in-out rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start shadow-md shadow-pink-500/50 my-5">shop
            now</a>
        </div>
        <div class="md:w-3/5">
          <img
            src="https://raw.githubusercontent.com/itzpradip/tailwind-eshop-static-html/bc1b37d73730b9e7804e91438246ce2f996cc435/images/hero-img.svg"
            alt="" class="w-full" />
        </div>
      </div>
    `;
  },
};

export default HeroSections;
