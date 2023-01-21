import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import OrderMenuReducer from "./OrderMenuSlice";

export const store = configureStore({
  reducer: {
    OrderMenu: OrderMenuReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
