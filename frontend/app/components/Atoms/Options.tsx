interface Props {
  options: string[];
  onChange: any;
  value: string;
}

const Options = ({ options, onChange, value }: Props) => {
  return (
    <select
      className="select w-full mt-3 mb-5 text-lg border-gray-700"
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      <option disabled selected>
        Priorität
      </option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Options;
