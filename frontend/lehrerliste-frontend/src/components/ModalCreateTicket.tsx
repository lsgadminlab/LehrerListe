import { useState } from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Options from "./Options";
import { createTicket } from "../api/tickets";

const ModalCreateTicket = (props: { show: boolean; onHide: () => void }) => {
  const [lehrer, setLehrer] = useState<string>("");
  const [raum, setRaum] = useState<string>("");
  const [beschreibung, setBeschreibung] = useState<string>("");
  const [priorität, setPriorität] = useState<string>("");

  return (
    props.show && (
      <dialog className="modal modal-bottom sm:modal-middle modal-open">
        <form method="dialog" className="modal-box">
          <h1 className="text-3xl font-bold">Ticket Erstellen</h1>
          <div className="form-control w-full ">
            <InputField title="Kürzel" value={lehrer} onChange={setLehrer} />
            <InputField title="Raum" value={raum} onChange={setRaum} />
            <TextArea onChange={setBeschreibung} />
          </div>
          <Options
            options={["LOW", "MEDIUM", "HIGH"]}
            onChange={setPriorität}
            value={priorität}
          ></Options>
          <button
            className="btn w-full btn-primary"
            onClick={async () => {
              await createTicket({
                id: 1,
                teacher: lehrer,
                room: raum,
                description: beschreibung,
                priority: priorität,
                created: new Date(),
                done: false,
              });
              props.onHide();
            }}
          >
            Abschicken
          </button>
        </form>
        <form
          method="dialog"
          className="modal-backdrop"
          onClick={() => {
            props.onHide();
          }}
        ></form>
      </dialog>
    )
  );
};

export default ModalCreateTicket;
