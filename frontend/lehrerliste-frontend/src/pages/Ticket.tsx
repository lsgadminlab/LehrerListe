import { Ticket } from "../types/ticket";
import TicketButtons from "../components/TicketButtons";
import TicketStat from "../components/TicketStat";
import { getTicket } from "../api/tickets";
import { useParams } from "react-router-dom";
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
      <div className="flex w-full justify-center flex-col">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <TicketStat title={"Raum"} value={ticket.room}></TicketStat>
          <TicketStat title={"Lehrer"} value={ticket.teacher}></TicketStat>
          <TicketStat title={"Priority"} value={ticket.priority}></TicketStat>
        </div>

        <p className=" p-6 text-2xl">{ticket.description}</p>

        <TicketButtons ticket={ticket}></TicketButtons>
      </div>
    )
  );
};

export default page;
