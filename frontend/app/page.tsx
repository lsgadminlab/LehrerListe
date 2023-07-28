import Link from "next/link";
import ModalCreateTicket from "./components/ModalCreateTicket";

export default function Home(props: {
  searchParams: Record<string, string> | null | undefined;
}) {
  return (
    <>
      {props.searchParams?.modal && <ModalCreateTicket />}

      <div className="hero mt-32">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Lehrer Liste</h1>
            <p className="py-6 text-2xl">
              Sie haben ein Problem gefunden und wissen nicht wie sie es lösen
              sollen. Schicken sie es doch hier ab und die Admins werden sich
              darum kümmern!
            </p>
            <Link href={"/?modal=true"}>
              <button className="btn btn-primary btn-lg">Neues Ticket</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
