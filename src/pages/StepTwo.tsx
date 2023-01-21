import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectRestaurant } from "../app/OrderMenuSlice";
import Selector from "../components/Selector";

const StepTwo = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const restaurants: string[] = useAppSelector(
    (state) => state.OrderMenu.restaurants
  );
  const selectedRestaurant: string = useAppSelector(
    (state) => state.OrderMenu.selectedRestaurant
  );
  const restaurantOptions: JSX.Element[] = restaurants.map(
    (restaurant, index) => {
      return (
        <option key={index} value={restaurant}>
          {restaurant}
        </option>
      );
    }
  );
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectRestaurant(event.target.value));
  };
  return (
    <>
      <Selector
        description="Restaurant"
        selectedValue={selectedRestaurant}
        onChange={handleSelectChange}
        Options={restaurantOptions}
      />
    </>
  );
};

export default StepTwo;
