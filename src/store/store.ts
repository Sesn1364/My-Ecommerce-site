import { configureStore } from '@reduxjs/toolkit';

// Example slice, we'll create real ones later
const store = configureStore({
  reducer: {
    // Add your reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
