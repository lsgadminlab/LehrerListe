"use client";

import ModalCreateTicket from "./components/ModalCreateTicket";
import ModalDetailedView from "./components/ModalDetailedView";
import { useRef } from "react";

export default function Home() {
  const modalRef: any = useRef();

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };

  return (
    <>
      <div className="hero bg-base-200 h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Lehrer Liste</h1>
            <p className="py-6">
              Sie haben ein Problem gefunden und wissen nicht wie sie es lösen
              sollen. Schicken sie es doch hier ab und die Admins werden sich
              darum kümmern!
            </p>
            <button className="btn btn-primary" onClick={() => openModal()}>
              Neues Ticket
            </button>
          </div>
        </div>
      </div>
      <ModalCreateTicket
        name="Test"
        onChange={() => {}}
        value="Test"
        ref={modalRef}
      />
    </>
  );
}
