import { useParams } from "react-router-dom";
import { getTicket } from "../api/tickets";
import TicketButtons from "../components/TicketButtons";
import TicketStat from "../components/TicketStat";
import { Ticket } from "../types/ticket";
import { useQuery } from "@tanstack/react-query";

const page = () => {
  const { id } = useParams<{ id: string }>();
  const { data: ticket, isFetched } = useQuery<Ticket, Error>({
    queryFn: () => getTicket(id as any),
    queryKey: ["ticket" + id],
  });
  return (
    ticket &&
    isFetched && (
      <>
        <div className="stats shadow">
          <TicketStat title={"Raum"} value={ticket.room}></TicketStat>
          <TicketStat title={"Lehrer"} value={ticket.teacher}></TicketStat>
          <TicketStat title={"Priority"} value={ticket.priority}></TicketStat>
        </div>

        <p className=" p-6 text-2xl">{ticket.description}</p>

        <TicketButtons ticket={ticket}></TicketButtons>
      </>
    )
  );
};

export default page;
