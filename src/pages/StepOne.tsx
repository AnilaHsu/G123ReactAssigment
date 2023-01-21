import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectMeal, selectPeopleNumber } from "../app/OrderMenuSlice";

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
  return (
    <div className="flex w-80 flex-col items-center gap-6 ">
      <select
        className="select-bordered select w-full max-w-xs"
        value={selectedMeal}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          dispatch(selectMeal(event.target.value));
        }}
      >
        <option key={-1} value="" disabled>
          Please select a meal
        </option>
        {mealOptions}
      </select>
      <input
        type="number"
        placeholder="Please enter number of people"
        className="input-bordered input w-full max-w-xs"
        min="1"
        defaultValue={peopleNumber}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(selectPeopleNumber(Number(event.target.value)));
        }}
      />
    </div>
  );
};

export default StepOne;
