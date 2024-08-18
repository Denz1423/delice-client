import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

// Selector to get the products from the cart
export const selectCartProducts = (state: RootState) =>
  state.cart.cart?.products;

// Selector to get the total price of the cart
export const selectCartTotal = createSelector(
  [(state: RootState) => state.cart.cart?.products],
  (products) => {
    if (!products) {
      return 0;
    }

    return products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0,
    );
  },
);
