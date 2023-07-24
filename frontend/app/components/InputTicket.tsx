"use client";

const InputTicket = (  show: boolean;
  onHide: () => void;
  person: PersonDataFlat;
  mode: "create" | "edit";) => {
  return (
    <dialog className="modal modal-bottom sm:modal-middle modal-open">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg mb-1">
            {props.mode == "edit" ? "Edit Person" : "Create Person"}
          </h3>
         
          </div>
        </form>
      </dialog>
  );
};

export default InputTicket;
