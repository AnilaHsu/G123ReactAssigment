import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../data/dishes.json";

interface dishesData {
  id: number;
  name: string;
  restaurant: string;
  availableMeals: string[];
}

interface OrderMenuState {
  dishesData: dishesData[];
  selectedMeal: string;
  availableMeals: string[];
  peopleNumber: number;
  selectedRestaurant: string;
  restaurants: string[];
  selectedDish: string;
  dishes: string[];
  servingsNumber: number;
}

const initialState: OrderMenuState = {
  dishesData: data.dishes,
  selectedMeal: "",
  availableMeals: ["breakfast", "lunch", "dinner"],
  peopleNumber: 1,
  selectedRestaurant: "",
  restaurants: [],
  selectedDish: "",
  dishes: [],
  servingsNumber: 1,
};

export const OrderMenuSlice = createSlice({
  name: "OrderMenu",
  initialState,
  reducers: {
    selectMeal: (state, action: PayloadAction<string>) => {
      state.selectedMeal = action.payload;
      state.restaurants = Array.from(
        new Set(
          state.dishesData
            .filter((dish) => {
              return dish.availableMeals.includes(action.payload);
            })
            .map((dish) => dish.restaurant)
        )
      );
      state.dishes = Array.from(
        new Set(
          state.dishesData
            .filter((dish) => {
              return dish.availableMeals.includes(action.payload);
            })
            .filter((dish) => {
              return dish.restaurant.includes(state.selectedRestaurant);
            })
            .map((dish) => dish.name)
        )
      );
    },
    selectPeopleNumber: (state, action: PayloadAction<number>) => {
      state.peopleNumber = action.payload;
    },
    selectRestaurant: (state, action: PayloadAction<string>) => {
      state.selectedRestaurant = action.payload;
      state.dishes = Array.from(
        new Set(
          state.dishesData
            .filter((dish) => {
              return dish.availableMeals.includes(state.selectedMeal);
            })
            .filter((dish) => {
              return dish.restaurant.includes(action.payload);
            })
            .map((dish) => dish.name)
        )
      );
    },
    selectDish: (state, action: PayloadAction<string>) => {
      state.selectedDish = action.payload;
    },
    selectServingsNumber: (state, action: PayloadAction<number>) => {
      state.servingsNumber = action.payload;
    },
  },
});

export const {
  selectMeal,
  selectPeopleNumber,
  selectRestaurant,
  selectDish,
  selectServingsNumber,
} = OrderMenuSlice.actions;
export default OrderMenuSlice.reducer;
