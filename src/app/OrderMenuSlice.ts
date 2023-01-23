import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../data/dishes.json";
import { DishOrderItem, OrderMenuState } from "../../src/type";

const initialState: OrderMenuState = {
  dishesData: data.dishes,
  step: 1,
  selectedMeal: "",
  peopleNumber: 1,
  selectedRestaurant: "",
  availableRestaurants: [],
  dishOrderList: [{ dish: "", servingsNumber: 1 }],
  availableDishes: [],
};

export const OrderMenuSlice = createSlice({
  name: "OrderMenu",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
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
    setDishOrderList: (state, action: PayloadAction<DishOrderItem[]>) => {
      const newDishesAndServingsList = [...action.payload];
      state.dishOrderList = newDishesAndServingsList;
    },
  },
});

export const {
  setStep,
  selectMeal,
  selectPeopleNumber,
  selectRestaurant,
  setDishOrderList,
} = OrderMenuSlice.actions;
export default OrderMenuSlice.reducer;
