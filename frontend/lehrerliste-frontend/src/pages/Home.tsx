import { useState } from "react";
import ModalCreateTicket from "../components/ModalCreateTicket";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <>
      <ModalCreateTicket show={show} onHide={() => setShow(false)} />

      <div className="hero mt-32">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Lehrerliste</h1>
            <p className="py-6 text-2xl">
              Probleme mit digitalem Laptops/Beamern/Dokucams einfach hier
              reporten!
            </p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => setShow(true)}
            >
              Neues Ticket
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
