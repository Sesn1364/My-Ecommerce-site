import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './slices/authSlice';
import productReducer from './slices/productSlice';

// Creating the Redux store with slices for auth and products
const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});

// Custom hooks for using Redux in your components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
