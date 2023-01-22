import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../data/dishes.json";
import {
  DishAndServings,
  DishChangeArg,
  OrderMenuState,
  ServingsChangeArg,
} from "../../src/type";

const initialState: OrderMenuState = {
  dishesData: data.dishes,
  selectedMeal: "",
  availableMeals: ["breakfast", "lunch", "dinner"],
  peopleNumber: 1,
  selectedRestaurant: "",
  availableRestaurants: [],
  allDishesAndServings: [{ dish: "", servingsNumber: 1 }],
  availableDishes: [],
};

export const OrderMenuSlice = createSlice({
  name: "OrderMenu",
  initialState,
  reducers: {
    selectMeal: (state, action: PayloadAction<string>) => {
      state.selectedMeal = action.payload;
      state.availableRestaurants = Array.from(
        new Set(
          state.dishesData
            .filter((dish) => {
              return dish.availableMeals.includes(action.payload);
            })
            .map((dish) => dish.restaurant)
        )
      );
      state.availableDishes = Array.from(
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
      state.availableDishes = Array.from(
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
    addDishAndServing: (state, action: PayloadAction<DishAndServings>) => {
      const newDishesAndServings = [...state.allDishesAndServings];
      newDishesAndServings.push(action.payload);
      state.allDishesAndServings = newDishesAndServings;
    },
    selectDish: (state, action: PayloadAction<DishChangeArg>) => {
      const selectedDish = action.payload.value;
      const newDishesAndServings = [...state.allDishesAndServings];
      newDishesAndServings[action.payload.index].dish = selectedDish;
      state.allDishesAndServings = newDishesAndServings;
    },
    selectServingsNumber: (state, action: PayloadAction<ServingsChangeArg>) => {
      const selectedServingsNumber = action.payload.value;
      const newDishesAndServings = [...state.allDishesAndServings];
      newDishesAndServings[action.payload.index].servingsNumber =
        selectedServingsNumber;
      state.allDishesAndServings = newDishesAndServings;
    },
  },
});

export const {
  selectMeal,
  selectPeopleNumber,
  selectRestaurant,
  addDishAndServing,
  selectDish,
  selectServingsNumber,
} = OrderMenuSlice.actions;
export default OrderMenuSlice.reducer;
