import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../data/dishes.json";

interface OrderMenuState {
  selectedMeal: string;
  availableMeals: string[];
  peopleNumber: number;
}

const initialState: OrderMenuState = {
  selectedMeal: "",
  availableMeals: ["breakfast", "lunch", "dinner"],
  peopleNumber: 1,
};

export const OrderMenuSlice = createSlice({
  name: "OrderMenu",
  initialState,
  reducers: {
    selectMeal: (state, action: PayloadAction<string>) => {
      state.selectedMeal = action.payload;
    },
    selectPeopleNumber: (state, action: PayloadAction<number>) => {
      state.peopleNumber = action.payload;
    },
  },
});

export const { selectMeal, selectPeopleNumber } = OrderMenuSlice.actions;
export default OrderMenuSlice.reducer;
