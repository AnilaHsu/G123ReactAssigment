import { InputType } from "../type";

const NumberInput = ({ description, value, onChange }: InputType) => {
  return (
    <div className="w-60 space-y-3">
      <label htmlFor="numberInput">Please Enter {description}</label>
      <input
        id="numberInput"
        type="number"
        placeholder="Enter here"
        className="input-bordered input w-full max-w-xs"
        min="1"
        max="10"
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
};

export default NumberInput;
