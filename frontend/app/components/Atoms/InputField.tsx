"use client";

interface inputFieldProps {
  title: string;
  onChange: any;
  value: string;
}

const InputField = ({ title, onChange, value }: inputFieldProps) => {
  return (
    <>
      <label className="label mt-3">
        <span className="label-text text-xl">{title}</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full text-xl "
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </>
  );
};

export default InputField;
