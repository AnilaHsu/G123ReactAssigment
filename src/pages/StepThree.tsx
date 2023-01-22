import { useFieldArray, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setDishOrderList, setStep } from "../app/OrderMenuSlice";
import { DishOrderItem, StepThreeFormValues } from "../type";

const StepThree = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const dishOptions: string[] = useAppSelector(
    (state) => state.availableDishes
  );
  const dishOrderList: DishOrderItem[] = useAppSelector(
    (state) => state.dishOrderList
  );
  const peopleNumber: number = useAppSelector((state) => state.peopleNumber);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StepThreeFormValues>({
    defaultValues: {
      dishOrderList: dishOrderList,
    },
    mode: "onChange",
  });
  const { fields, append } = useFieldArray({
    control,
    name: "dishOrderList",
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(setDishOrderList(data.dishOrderList));
    dispatch(setStep(4));
  });
  const handleClick = (event: React.MouseEvent) => {
    append({ dish: "", servingsNumber: 1 });
    event.preventDefault();
  };

  const selectDishesAndServingsElement: JSX.Element[] = fields.map(
    (field, index) => {
      return (
        <div key={field.id} className="flex h-24 flex-col gap-6 sm:flex-row">
          <div className="h-24 w-80 space-y-3">
            <label htmlFor="selector">Please Select a dish</label>
            <select
              id="selector"
              className="select-bordered select w-full max-w-xs"
              {...register(`dishOrderList.${index}.dish` as const, {
                required: {
                  value: true,
                  message: "Please select a dish option",
                },
                validate: {
                  noDuplicate: (dish, formValues) =>
                    formValues.dishOrderList.filter(
                      (dishOrderItem) => dishOrderItem.dish === dish
                    ).length <= 1 ||
                    "The dish can't repeat, please add servings.",
                },
              })}
            >
              <option key={-1} value="" disabled>
                {"Select here"}
              </option>
              {dishOptions.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
            <span className="text-error">
              {errors.dishOrderList?.[index]?.dish?.message}
            </span>
          </div>
          <div className="w-60 space-y-3">
            <label htmlFor="numberInput">Please enter no. of servings</label>
            <input
              id="numberInput"
              type="number"
              placeholder="Enter here"
              className="input-bordered input w-full max-w-xs"
              {...register(`dishOrderList.${index}.servingsNumber` as const, {
                required: {
                  value: true,
                  message: "Please enter servings number",
                },
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: "Number must be greater than or equal to 1",
                },
                validate: {
                  servingsNumber: (value, formValues) => {
                    const total = formValues.dishOrderList.reduce(
                      (acc, val) => {
                        return acc + val.servingsNumber;
                      },
                      0
                    );
                    if (total < peopleNumber) {
                      return "Total dishes must be greater or equal to people number";
                    } else if (total > 10) {
                      return "Total dishes must be less then 10";
                    } else {
                      return true;
                    }
                  },
                },
              })}
            />
            <span className="text-error">
              {errors.dishOrderList?.[index]?.servingsNumber?.message}
            </span>
          </div>
        </div>
      );
    }
  );

  return (
    <form className="flex flex-col gap-36 sm:gap-12" onSubmit={onSubmit}>
      {selectDishesAndServingsElement}

      <button className="btn-circle btn" onClick={handleClick}>
        +
      </button>

      <div className="flex sm:my-10">
        <button className="btn" onClick={() => dispatch(setStep(2))}>
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

export default StepThree;
