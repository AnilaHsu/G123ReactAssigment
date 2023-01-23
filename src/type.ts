interface dishesData {
  id: number;
  name: string;
  restaurant: string;
  availableMeals: string[];
}

export interface DishOrderItem {
  dish: string;
  servingsNumber: number;
}

export interface OrderMenuState {
  dishesData: dishesData[];
  step: number;
  selectedMeal: string;
  peopleNumber: number;
  selectedRestaurant: string;
  availableRestaurants: string[];
  dishOrderList: DishOrderItem[];
  availableDishes: string[];
}

export type StepOneFormValues = {
  meal: string;
  people: number;
};

export type StepTwoFormValues = {
  restaurant: string;
};

export type StepThreeFormValues = {
  dishOrderList: DishOrderItem[];
};
