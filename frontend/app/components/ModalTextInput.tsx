import { ChangeEvent } from "react";

const ModalTextInputField = (props: {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <div className="m-2">
      <span className="text-base label-text mr-3">{props.name}</span>
      <br />
      <input
        type="text"
        value={props.value}
        className="input w-full border-gray-500"
        onChange={props.onChange}
      />
    </div>
  );
};

export default ModalTextInputField;