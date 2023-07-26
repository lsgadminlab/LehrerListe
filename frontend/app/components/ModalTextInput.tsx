import { ChangeEvent } from "react";

const ModalTextInputField = (props: {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <>
      <button className="btn" onClick={() => window.my_modal_5.showModal()}>
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h1 className="text-5xl font-bold">Ticket Erstellen</h1>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Lehrerkürzel</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text">Raumnummer</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <label className="label">
            <span className="label-text">Beschreibung des Problems</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24 w-full "
            placeholder="Problem"
          ></textarea>
          <button className="btn w-full ">Abschicken</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalTextInputField;
