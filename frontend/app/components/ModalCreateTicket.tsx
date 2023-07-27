"use client";

import {
  ChangeEvent,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import InputField from "./Atoms/InputField";
import Options from "./Atoms/Options";
import TextArea from "./Atoms/TextArea";
import TicketList from "../doneTickets/page";
import { sendTicket } from "@/lib/data/tickets";

const ModalCreateTicket = forwardRef(
  (
    props: {
      name: string;
      onChange: (e: ChangeEvent<HTMLInputElement>) => void;
      value: string;
    },
    ref
  ) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
      modalRef.current?.showModal();
    };

    useImperativeHandle(ref, () => ({
      openModal: openModal,
    }));

    const [lehrer, setLehrer] = useState<string>("");
    const [raum, setRaum] = useState<string>("");
    const [beschreibung, setBeschreibung] = useState<string>("");
    const [priorität, setPriorität] = useState<string>("");

    return (
      <>
        <dialog className="modal modal-bottom sm:modal-middle" ref={modalRef}>
          <form method="dialog" className="modal-box">
            <h1 className="text-5xl font-bold">Ticket Erstellen</h1>
            <div className="form-control w-full ">
              <InputField title="Raum" value={lehrer} onChange={setLehrer} />
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
              onClick={() => {
                sendTicket({
                  id: 1,
                  teacher: lehrer,
                  room: raum,
                  description: beschreibung,
                  priority: priorität,
                  created: new Date(),
                  done: false,
                });
              }}
            >
              Abschicken
            </button>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button
              onClick={() => {
                modalRef.current?.close();
              }}
            >
              close
            </button>
          </form>
        </dialog>
      </>
    );
  }
);

export default ModalCreateTicket;
