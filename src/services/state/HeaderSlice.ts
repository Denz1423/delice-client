import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TableState = number | null;

const initialState: TableState = null;

const getInitialTableNumberState = (): TableState => {
  return Number(localStorage.getItem('tableNumber')) || null;
};

export const TableSlice = createSlice({
  name: 'tableNumber',
  initialState: getInitialTableNumberState,
  reducers: {
    setTableNumber: (_state, action: PayloadAction<number>) => {
      localStorage.setItem('tableNumber', action.payload.toString());
      return action.payload;
    },
    clearTableNumber: () => {
      localStorage.removeItem('tableNumber');
      return initialState;
    },
  },
});

export const { setTableNumber, clearTableNumber } = TableSlice.actions;
