const LoadingRequest = {
  loading() {
    const loadingSpinner = document.createElement('div');
    loadingSpinner.classList.add('loading');
    loadingSpinner.innerHTML = `<div class="fixed top-1/2 z-50 left-2/4 brightness-100">
    <div style="border-top-color:transparent"
        class="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>`;
    document.querySelector('#container').append(loadingSpinner);
    document.querySelector('#container').classList.add('cursor-wait');
    document.querySelector('#container').classList.add('brightness-50');
  },
  stopLoading() {
    document.querySelector('.loading').remove();
    document.querySelector('#container').classList.remove('brightness-50', 'cursor-wait');
  },
};
export default LoadingRequest;
