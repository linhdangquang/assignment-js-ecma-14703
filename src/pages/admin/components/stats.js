const Stats = {
  render() {
    return /* html */ `
    <div class="flex flex-wrap">
    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
      <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div class="flex-auto p-4">
          <div class="flex flex-wrap">
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 class="text-gray-400 uppercase font-bold text-xs">
                Traffic
              </h5>
              <span class="font-semibold text-xl text-gray-700">
                350,897
              </span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                <i class="ri-line-chart-fill"></i>
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-400 mt-4">
            <span class="text-emerald-500 mr-2">
              <i class="ri-arrow-up-line"></i> 3.48%
            </span>
            <span class="whitespace-nowrap">
              Since last month
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
      <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div class="flex-auto p-4">
          <div class="flex flex-wrap">
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 class="text-gray-400 uppercase font-bold text-xs">
                New users
              </h5>
              <span class="font-semibold text-xl text-gray-700">
                2,356
              </span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                <i class="ri-user-add-line"></i>
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-400 mt-4">
            <span class="text-red-500 mr-2">
              <i class="ri-arrow-down-line"></i> 3.48%
            </span>
            <span class="whitespace-nowrap"> Since last week </span>
          </p>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
      <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div class="flex-auto p-4">
          <div class="flex flex-wrap">
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 class="text-gray-400 uppercase font-bold text-xs">
                Sales
              </h5>
              <span class="font-semibold text-xl text-gray-700">
                924
              </span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                <i class="ri-user-line"></i>
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-400 mt-4">
            <span class="text-orange-500 mr-2">
              <i class="ri-arrow-down-line"></i> 1.10%
            </span>
            <span class="whitespace-nowrap"> Since yesterday </span>
          </p>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
      <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div class="flex-auto p-4">
          <div class="flex flex-wrap">
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 class="text-gray-400 uppercase font-bold text-xs">
                Performance
              </h5>
              <span class="font-semibold text-xl text-gray-700">
                49,65%
              </span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
              <div
                class="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500">
                <i class="ri-percent-fill"></i>
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-400 mt-4">
            <span class="text-emerald-500 mr-2">
              <i class="ri-arrow-up-line"></i> 12%
            </span>
            <span class="whitespace-nowrap">
              Since last month
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
    `;
  },
};
export default Stats;
