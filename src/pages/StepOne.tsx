import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectMeal, selectPeopleNumber, setStep } from "../app/OrderMenuSlice";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepOneFormValues } from "../type";

const mealOptions = ["breakfast", "lunch", "dinner"] as const;
const schema = z.object({
  meal: z.enum(mealOptions, {
    errorMap: () => {
      return { message: "Please choose a meal option" };
    },
  }),
  people: z
    .number({
      required_error: "Please enter people number",
      invalid_type_error: "Please enter people number",
    })
    .min(1, {})
    .max(10),
});

const StepOne = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedMeal: string = useAppSelector((state) => state.selectedMeal);
  const peopleNumber: number = useAppSelector((state) => state.peopleNumber);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StepOneFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      meal: selectedMeal,
      people: peopleNumber,
    },
    mode: "onChange",
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(selectMeal(data.meal));
    dispatch(selectPeopleNumber(data.people));
    dispatch(setStep(2));
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <div className="h-24 w-80 space-y-3">
        <label htmlFor="selector">Please select a meal</label>
        <select
          id="selector"
          className="select-bordered select w-full max-w-xs"
          defaultValue={selectedMeal}
          {...register("meal")}
        >
          <option key={-1} value="" disabled>
            {"Select here"}
          </option>
          {mealOptions.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <span className="w-80 text-error">{errors.meal?.message}</span>
      </div>

      <div className="h-24 w-80 space-y-3">
        <label htmlFor="numberInput">Please enter number of people</label>
        <input
          id="numberInput"
          type="number"
          placeholder="Enter here"
          className="input-bordered input w-full max-w-xs"
          {...register("people", { valueAsNumber: true })}
        />
        <span className="text-error">{errors.people?.message}</span>
      </div>

      <div className="my-8 flex w-full">
        <div className="grow" />
        <button className="btn-info btn" type="submit">
          Next
        </button>
      </div>
    </form>
  );
};

export default StepOne;
