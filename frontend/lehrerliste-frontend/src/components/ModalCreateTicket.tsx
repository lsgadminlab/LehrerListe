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
  const navigate = useNavigate();

  const onUpload = (file: File) => {
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
          {/* Just for layout reasons
          <ImageUpload onUpload={onUpload} image={bild} />
          */}
          <Options
            options={["LOW", "MEDIUM", "HIGH"]}
            onChange={setPriorität}
            value={priorität}
            placeholder="Priorität"
          ></Options>
          <button
            className="btn w-full btn-primary"
            onClick={async () => {
              //only send the ticket and close the modal if the teacher and the room are not empty
              if (
                lehrer === "" ||
                raum === "" ||
                beschreibung === "" ||
                priorität === ""
              ) {
                //display an alert if the teacher or the room are empty and tell the user which to fill out
                let output = "";
                let missing = [];
                if (lehrer === "") {
                  missing.push("das Kürzel");
                }
                if (raum === "") {
                  missing.push("den Raum");
                }
                if (beschreibung === "") {
                  missing.push("die Beschreibung");
                }
                if (priorität === "") {
                  missing.push("die Priorität");
                }
                if (missing.length === 1) {
                  output = missing[0];
                } else if (missing.length === 2) {
                  output = missing[0] + " und " + missing[1];
                } else if (missing.length === 3) {
                  output =
                    missing[0] + ", " + missing[1] + " und " + missing[2];
                } else if (missing.length === 4) {
                  output =
                    missing[0] +
                    ", " +
                    missing[1] +
                    ", " +
                    missing[2] +
                    " und " +
                    missing[3];
                }
                alert("Bitte fülle " + output + " aus!");
                return;
              }

              //if there is an image, send it to the cdn and get the url
              // let bildUrl = "";
              // if (bild) {
              //   const formData = new FormData();
              //   formData.append("file", bild);
              //   const response = await fetch(
              //     "https://api.lehrerliste.de/cdn",
              //     {
              //       method: "POST",
              //       body: formData,
              //     }
              //   );
              //   const data = await response.json();
              //   bildUrl = data.url;
              // }
              //if the room is 4 characters long and the second character is not a dot, add a dot after the first character
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
              });
              props.onHide();
              // redirect to the ticket list
              navigate("/open");
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
