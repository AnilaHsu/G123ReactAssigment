import { useAppSelector } from "../app/hooks";

const StepFour = (): JSX.Element => {
  const selectedMeal = useAppSelector((state) => state.OrderMenu.selectedMeal);
  const peopleNumber = useAppSelector((state) => state.OrderMenu.peopleNumber);
  const selectedRestaurant = useAppSelector(
    (state) => state.OrderMenu.selectedRestaurant
  );
  const allDishesAndServings = useAppSelector(
    (state) => state.OrderMenu.allDishesAndServings
  );
  const allDishesAndServingsElements = allDishesAndServings.map(
    (item, index) => {
      return (
        <p key={index}>
          {item.dish} - {item.servingsNumber}
        </p>
      );
    }
  );
  return (
    <div className="grid grid-cols-2 grid-rows-4 ">
      <span>Meal</span>
      <span>{selectedMeal}</span>
      <span>No. of People</span>
      <span>{peopleNumber}</span>
      <span>Restaurant</span>
      <span>{selectedRestaurant}</span>
      <span>Dishes</span>
      <span>{allDishesAndServingsElements}</span>
    </div>
  );
};

export default StepFour;
