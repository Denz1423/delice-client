import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import agent from '@/services/api/agent';
import { Product } from '@/models/Product';
import { RootState } from '@/store/store';

const productsAdapter = createEntityAdapter<Product>();

//Actions
export const fetchProductsAsync = createAsyncThunk<Product[]>(
  'menu/fetchProductsAsync',
  async () => {
    try {
      return await agent.Products.getAll();
    } catch (err) {
      console.log(err);
    }
  },
);

//Reducers
export const menuSlice = createSlice({
  name: 'menu',
  initialState: productsAdapter.getInitialState({
    productsLoaded: false,
    status: 'idle',
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.status = 'pendingFetchProducts';
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      productsAdapter.setAll(state, action.payload);
      state.productsLoaded = true;
      state.status = 'idle';
    });
    builder.addCase(fetchProductsAsync.rejected, (state) => {
      state.status = 'idle';
    });
  },
});

//Selectors
export const productSelectors = productsAdapter.getSelectors(
  (state: RootState) => state.menu,
);
