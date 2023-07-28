"use client";

import { useState } from "react";

import InputField from "./Atoms/InputField";
import Options from "./Atoms/Options";
import TextArea from "./Atoms/TextArea";
import { sendTicket } from "@/lib/data/tickets";
import { useRouter } from "next/navigation";

const ModalCreateTicket = () => {
  const [lehrer, setLehrer] = useState<string>("");
  const [raum, setRaum] = useState<string>("");
  const [beschreibung, setBeschreibung] = useState<string>("");
  const [priorität, setPriorität] = useState<string>("");
  const router = useRouter();

  return (
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
            await sendTicket({
              id: 1,
              teacher: lehrer,
              room: raum,
              description: beschreibung,
              priority: priorität,
              created: new Date(),
              done: false,
            });
            router.push("/open");
            router.refresh();
          }}
        >
          Abschicken
        </button>
      </form>
      <form
        method="dialog"
        className="modal-backdrop"
        onClick={() => {
          router.push("/");
        }}
      ></form>
    </dialog>
  );
};

export default ModalCreateTicket;
