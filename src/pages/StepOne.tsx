import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectMeal, selectPeopleNumber } from "../app/OrderMenuSlice";
import NumberInput from "../components/NumberInput";
import Selector from "../components/Selector";

const StepOne = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedMeal: string = useAppSelector(
    (state) => state.OrderMenu.selectedMeal
  );
  const availableMeals: string[] = useAppSelector(
    (state) => state.OrderMenu.availableMeals
  );
  const peopleNumber: number = useAppSelector(
    (state) => state.OrderMenu.peopleNumber
  );
  const mealOptions: JSX.Element[] = availableMeals.map((meal, index) => {
    return (
      <option key={index} value={meal}>
        {meal}
      </option>
    );
  });
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectMeal(event.target.value));
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectPeopleNumber(Number(event.target.value)));
  };
  return (
    <div className="flex flex-col items-start gap-8">
      <Selector
        description="meal"
        selectedValue={selectedMeal}
        onChange={handleSelectChange}
        Options={mealOptions}
      />
      <NumberInput
        description="Number of people"
        value={peopleNumber}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default StepOne;
