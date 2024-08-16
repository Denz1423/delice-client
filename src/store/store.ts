import { configureStore } from '@reduxjs/toolkit';
import { menuSlice } from '@/services/state/MenuSlice';
import { cartSlice } from '@/services/state/CartSlice';
import { TableSlice } from '@/services/state/HeaderSlice';

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
    tableNumber: TableSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
