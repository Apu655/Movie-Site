import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Slices/AuthSlice";
import movieReducer  from "./Slices/MovieSlice/MovieSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    movie:movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
