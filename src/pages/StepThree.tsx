import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addDishAndServing,
  selectDish,
  selectServingsNumber,
} from "../app/OrderMenuSlice";
import NumberInput from "../components/NumberInput";
import Selector from "../components/Selector";
import { DishAndServings } from "../type";

const StepThree = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const availableDishes: string[] = useAppSelector(
    (state) => state.OrderMenu.availableDishes
  );

  const allDishesAndServings: DishAndServings[] = useAppSelector(
    (state) => state.OrderMenu.allDishesAndServings
  );
  const dishOptions: JSX.Element[] = availableDishes.map((dish, index) => {
    return (
      <option key={index} value={dish}>
        {dish}
      </option>
    );
  });
  const handleDishChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    dispatch(
      selectDish({
        value: event.target.value,
        index,
      })
    );
  };
  const handleServingsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    dispatch(
      selectServingsNumber({ value: Number(event.target.value), index })
    );
  };
  const handleClick = () => {
    dispatch(addDishAndServing({ dish: "", servingsNumber: 1 }));
  };
  const selectDishesAndServings: JSX.Element[] = allDishesAndServings.map(
    (selectedDish, index) => {
      return (
        <div key={index} className="flex gap-8">
          <Selector
            description="Dish"
            selectedValue={selectedDish.dish}
            onChange={(event) => handleDishChange(event, index)}
            Options={dishOptions}
          />
          <NumberInput
            description="no. of servings"
            value={selectedDish.servingsNumber}
            onChange={(event) => handleServingsChange(event, index)}
          />
        </div>
      );
    }
  );

  return (
    <div className="space-y-6">
      {selectDishesAndServings}
      <button className="btn-circle btn" onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default StepThree;
