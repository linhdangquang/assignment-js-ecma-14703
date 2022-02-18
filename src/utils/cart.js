/* eslint-disable max-len */
import Swal from 'sweetalert2';
import USDFormat from './currencyFormat';

let cart = [];
if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'));
}

export const addToCart = (newProduct, next) => {
  const existingProduct = cart.find((product) => product.id === newProduct.id);
  if (!existingProduct) {
    const inStock = newProduct.inStock - newProduct.quantity;
    // eslint-disable-next-line no-param-reassign
    newProduct.inStock = inStock;
    cart.push(newProduct);
  } else {
    existingProduct.quantity += parseInt(newProduct.quantity, 10);
    if (existingProduct.inStock < newProduct.quantity) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Sorry, your input is larger than the available',
        showConfirmButton: false,
        timer: 800,
      });
    }
    if (existingProduct.inStock === 0) {
      return Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Sorry, you has add max quantity',
        showConfirmButton: false,
        timer: 800,
      });
    }
    existingProduct.inStock -= parseInt(newProduct.quantity, 10);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  next();
  return true;
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
          'Your item has been deleted.',
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

export const emptyCart = async (next) => {
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
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Removed all item in cart successfully',
        showConfirmButton: false,
        timer: 1200,
      });
      localStorage.removeItem('cart');
    }
  });
  next();
};

export const updateTotalCart = (cartArr) => {
  const totalPrice = USDFormat(cartArr.reduce((sum, { price, quantity }) => sum + (parseInt(price, 10) * parseInt(quantity, 10) || 0), 0));
  document.querySelector('#total').innerText = totalPrice;
  document.querySelector('#subtotal').innerText = totalPrice;
};
