interface Props {
  options: string[];
  onChange: any;
  value: string;
  placeholder: string;
}

const Options = ({ options, onChange, placeholder }: Props) => {
  return (
    <select
      className="select w-full mt-3 mb-5 text-lg border-gray-700"
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      <option disabled selected>
        {placeholder}
      </option>
      {options.map((option,i) => (
        <option value={option} key={i + "option"}>{option}</option>
      ))}
    </select>
  );
};

export default Options;
