import exp from "constants";

interface TextAreaProps {
  onChange: any;
  value?: string;
}

const TextArea = ({ onChange }: TextAreaProps) => {
  return (
    <>
      <label className="label">
        <span className="label-text">Beschreibung des Problems</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-24 w-full "
        placeholder="Problem"
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </>
  );
};

export default TextArea;
