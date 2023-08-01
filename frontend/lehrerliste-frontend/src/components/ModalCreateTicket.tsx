import ImageUpload from "../components/ImageUpload";
import InputField from "./InputField";
import Options from "./Options";
import TextArea from "./TextArea";
import { createTicket } from "../api/tickets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ModalCreateTicket = (props: { show: boolean; onHide: () => void }) => {
  const [lehrer, setLehrer] = useState<string>("");
  const [raum, setRaum] = useState<string>("");
  const [beschreibung, setBeschreibung] = useState<string>("");
  const [priorität, setPriorität] = useState<string>("");
  const [bild, setBild] = useState<File>();
  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("This is a test message");

  const navigate = useNavigate();

  const onUpload = (file: File|undefined) => {
    console.log(file);
    setBild(file);
  };

  return (
    props.show && (
      <dialog className="modal modal-bottom sm:modal-middle modal-open">
        <form method="dialog" className="modal-box">
          <h1 className="text-3xl font-bold">Ticket Erstellen</h1>
          <div className="form-control w-full ">
            <InputField title="Kürzel" value={lehrer} onChange={setLehrer} maxlength={3}/>
            <InputField title="Raum" value={raum} onChange={setRaum} maxlength={5} />
            <TextArea onChange={setBeschreibung} />
          </div>
          <ImageUpload onUpload={onUpload} image={bild} />
         
          <Options
            options={["LOW", "MEDIUM", "HIGH"]}
            onChange={setPriorität}
            value={priorität}
            placeholder="Priorität"
          ></Options>
          <button
            className="btn w-full btn-primary"
            onClick={async () => {
              setError(false);
              //only send the ticket and close the modal if the teacher and the room are not empty
              if (
                lehrer === "" ||
                raum === "" ||
                beschreibung === "" ||
                priorität === ""
              ) {
                setError(true);
                setErrorText("Bitte füllen Sie alle Felder aus");
                return;
              }
              //if the description is longer than 100 words, show an error
              if (beschreibung.split(" ").length > 100) {
                setError(true);
                setErrorText(`Bitte schreiben sie keinen Roman! Sie haben ${beschreibung.split(" ").length} Wörter geschrieben!`);
                return;
              }
              if(beschreibung.split(" ").length < 5) {
                setError(true);
                setErrorText("Bitte beschreiben sie ihr Problem etwas genauer!");
                return;
              }
              //if the teacher is longer than 5 characters, show an error
              if (lehrer.length != 3) {
                setError(true);
                setErrorText("Bitte geben sie ein gültiges Kürzel ein!");
                return;
              }

              await createTicket({
                id: 1,
                teacher: lehrer,
                room:
                  raum.length === 4 && raum[1] !== "."
                    ? raum[0] + "." + raum.substring(1)
                    : raum,
                description: beschreibung,
                priority: priorität,
                created: new Date(),
                done: false,
              }).catch((e) => {
                setError(true);
                setErrorText("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut, oder kontaktieren sie die Administratoren.");
                throw e;
              });
              props.onHide();
              navigate("/open");
            }}
          >
            Abschicken
          </button>
          {error &&
          <p className="text-red-500">{errorText}</p>
        }
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
