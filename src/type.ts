export interface InputType {
  description: string;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
export interface SelectorType {
  description: string;
  selectedValue: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  Options: JSX.Element[];
}

interface dishesData {
  id: number;
  name: string;
  restaurant: string;
  availableMeals: string[];
}

export interface DishAndServings {
  dish: string;
  servingsNumber: number;
}

export interface OrderMenuState {
  dishesData: dishesData[];
  selectedMeal: string;
  availableMeals: string[];
  peopleNumber: number;
  selectedRestaurant: string;
  availableRestaurants: string[];
  allDishesAndServings: DishAndServings[];
  availableDishes: string[];
}

export interface DishChangeArg {
  value: string;
  index: number;
}

export interface ServingsChangeArg {
  value: number;
  index: number;
}
