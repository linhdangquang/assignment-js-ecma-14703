import Swal from 'sweetalert2';

let cart = [];
if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'));
}

export const addToCart = (newProduct) => {
  const existingProduct = cart.find((product) => product.id === newProduct.id);
  if (!existingProduct) {
    cart.push(newProduct);
  } else {
    existingProduct.quantity += parseInt(newProduct.quantity, 10);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const increaseQuantity = (id) => {
  cart.find((item) => item.id === id).quantity += 1;
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const decreaseQuantity = async (id, next) => {
  const currentProduct = cart.find((item) => item.id === id);
  currentProduct.quantity -= 1;
  if (currentProduct.quantity < 1) {
    await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        cart = cart.filter((item) => item.id !== id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        );
      }
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  next();
};

export const removeItemCart = async (id, next) => {
  await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success',
      );
      cart = cart.filter((item) => item.id !== id);
    }
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  next();
};
