import TicketButtons from "@/app/components/Atoms/TicketButtons";
import TicketStat from "@/app/components/Atoms/TicketStat";
import { getTicket } from "@/lib/data/tickets";
import React from "react";

const page = async ({ params }: { params: { id: number } }) => {
  const ticket = await getTicket(params.id);
  return (
    <>
      <div className="stats shadow">
        <TicketStat title={"Raum"} value={ticket.room}></TicketStat>
        <TicketStat title={"Lehrer"} value={ticket.teacher}></TicketStat>
        <TicketStat title={"Priority"} value={ticket.priority}></TicketStat>
      </div>

      <p className=" p-6 text-2xl">{ticket.description}</p>

      <TicketButtons ticket={ticket}></TicketButtons>
    </>
  );
};

export default page;
