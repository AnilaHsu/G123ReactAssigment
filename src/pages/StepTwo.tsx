import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectRestaurant, setStep } from "../app/OrderMenuSlice";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { StepTwoFormValues } from "../type";

const StepTwo = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const restaurantOptions: string[] = useAppSelector(
    (state) => state.availableRestaurants
  );
  const selectedRestaurant: string = useAppSelector(
    (state) => state.selectedRestaurant
  );
  const schema = z.object({
    restaurant: z.string().refine((val) => restaurantOptions.includes(val), {
      message: "Please choose a restaurant option",
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StepTwoFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      restaurant: selectedRestaurant,
    },
    mode: "onChange",
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(selectRestaurant(data.restaurant));
    dispatch(setStep(3));
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <div className="h-24 w-80 space-y-3">
        <label htmlFor="selector">Please Select a restaurant</label>
        <select
          id="selector"
          className="select-bordered select w-full max-w-xs"
          {...register("restaurant")}
        >
          <option key={-1} value="" disabled>
            {"Select here"}
          </option>
          {restaurantOptions.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <span className="text-error">{errors.restaurant?.message}</span>
      </div>
      <div className="my-8 flex">
        <button className="btn" onClick={() => dispatch(setStep(1))}>
          Previous
        </button>
        <div className="grow" />
        <button className="btn-info btn" type="submit">
          Next
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
