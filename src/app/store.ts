import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import orderMenuReducer from "./OrderMenuSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: orderMenuReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
