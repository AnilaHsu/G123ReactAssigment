import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectRestaurant } from "../app/OrderMenuSlice";

const StepTwo = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const restaurants: string[] = useAppSelector(
    (state) => state.OrderMenu.restaurants
  );
  const selectedRestaurant: string = useAppSelector(
    (state) => state.OrderMenu.selectedRestaurant
  );
  const restaurantOptions = restaurants.map((restaurant, index) => {
    return (
      <option key={index} value={restaurant}>
        {restaurant}
      </option>
    );
  });
  return (
    <div className="w-80">
      <select
        className="select-bordered select w-full max-w-xs"
        value={selectedRestaurant}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          dispatch(selectRestaurant(event.target.value));
        }}
      >
        <option key={-1} value="" disabled>
          Please select a restaurant
        </option>
        {restaurantOptions}
      </select>
    </div>
  );
};

export default StepTwo;
