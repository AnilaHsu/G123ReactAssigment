import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../data/dishes.json";

const restaurants: string[] = Array.from(
  new Set(data.dishes.map((dish) => dish.restaurant))
);

interface OrderMenuState {
  selectedMeal: string;
  availableMeals: string[];
  peopleNumber: number;
  selectedRestaurant: string;
  restaurants: string[];
}

const initialState: OrderMenuState = {
  selectedMeal: "",
  availableMeals: ["breakfast", "lunch", "dinner"],
  peopleNumber: 1,
  selectedRestaurant: "",
  restaurants: restaurants,
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
    selectRestaurant: (state, action: PayloadAction<string>) => {
      state.selectedRestaurant = action.payload;
    },
  },
});

export const { selectMeal, selectPeopleNumber, selectRestaurant } =
  OrderMenuSlice.actions;
export default OrderMenuSlice.reducer;
