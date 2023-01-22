import { SelectorType } from "../type";

const Selector = ({
  description,
  selectedValue,
  onChange,
  Options,
}: SelectorType) => {
  return (
    <div className="w-80 space-y-3">
      <label htmlFor="selector">Please Select a {description}</label>
      <select
        id="selector"
        className="select-bordered select w-full max-w-xs"
        value={selectedValue}
        onChange={onChange}
      >
        <option key={-1} value="" disabled>
          {"Select here"}
        </option>
        {Options}
      </select>
    </div>
  );
};

export default Selector;
