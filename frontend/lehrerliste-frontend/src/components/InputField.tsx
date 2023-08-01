interface inputFieldProps {
  title: string;
  onChange: any;
  value: string;
  maxlength?: number;
}

const InputField = ({ title, onChange, value, maxlength }: inputFieldProps) => {
  return (
    <>
      <label className="label mt-3">
        <span className="label-text text-xl">{title}</span>
      </label>
      <input
        type="text"
        className="input input-bordered w-full text-xl uppercase"
        maxLength={maxlength}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </>
  );
};

export default InputField;
