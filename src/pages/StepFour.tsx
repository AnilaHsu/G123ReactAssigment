import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setStep } from "../app/OrderMenuSlice";
import { DishOrderItem, OrderMenuState } from "../type";

const StepFour = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const orderMenuState: OrderMenuState = useAppSelector(
    (state) => state
  );
  const dishOrderList: DishOrderItem[] = useAppSelector(
    (state) => state.dishOrderList
  );
  const dishOrderElements: JSX.Element[] = dishOrderList.map((item, index) => {
    return (
      <p key={index}>
        {item.dish} - {item.servingsNumber}
      </p>
    );
  });
  const handleSubmit = (): void => {
    console.log({
      meal: orderMenuState.selectedMeal,
      people: orderMenuState.peopleNumber,
      restaurant: orderMenuState.selectedRestaurant,
      dishes: orderMenuState.dishOrderList,
    });
  };
  return (
    <>
      <div className="grid w-96 grid-cols-2 grid-rows-4">
        <h2 className="font-bold">Meal</h2>
        <span>{orderMenuState.selectedMeal}</span>
        <h2 className="font-bold">No. of People</h2>
        <span>{orderMenuState.peopleNumber}</span>
        <h2 className="font-bold">Restaurant</h2>
        <span>{orderMenuState.selectedRestaurant}</span>
        <h2 className="font-bold">Dishes</h2>
        <span className=" border p-2">{dishOrderElements}</span>
      </div>
      <div className="flex w-96">
        <button className="btn" onClick={() => dispatch(setStep(3))}>
          Previous
        </button>
        <div className="grow" />
        <button className="btn-info btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default StepFour;
