import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '@/models/Cart';

interface CartState {
  cart: Cart | null;
}

const getInitialCartState = (): CartState => {
  let initialCart = null;
  const cartFromStorage = localStorage.getItem('cart');
  if (cartFromStorage != null) {
    initialCart = JSON.parse(cartFromStorage);
  }
  return {
    cart: initialCart,
  };
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: getInitialCartState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    clearCart: (state) => {
      localStorage.removeItem('cart');
      state.cart = null;
    },
    addProductToCart: (state, action) => {
      const { product } = action.payload;
      if (!state.cart) {
        state.cart = { products: [{ ...product, quantity: 1 }] };
      } else {
        const existingProduct = state.cart.products.find(
          (item) => item.id === product.id,
        );
        existingProduct
          ? existingProduct.quantity++
          : state.cart.products.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload;
      const productIndex = state.cart?.products.findIndex(
        (item) => item.id === productId,
      );

      if (productIndex === -1 || productIndex === undefined) return;

      state.cart!.products[productIndex].quantity--;

      if (state.cart?.products[productIndex].quantity === 0) {
        state.cart.products.splice(productIndex, 1);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { clearCart, addProductToCart, removeProductFromCart, setCart } =
  cartSlice.actions;
