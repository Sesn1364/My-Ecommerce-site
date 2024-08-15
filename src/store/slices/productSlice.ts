import { createSlice } from '@reduxjs/toolkit';

interface ProductState {
  products: { id: number; name: string; price: number }[];
}

const initialState: ProductState = {
  products: [
    // Example products, you can replace or expand these later
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
