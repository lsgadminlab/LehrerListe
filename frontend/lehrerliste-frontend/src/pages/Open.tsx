import { useQuery } from "@tanstack/react-query";
import { getTickets } from "../api/tickets";
import { TicketsList } from "../components/TicketList";
import { Ticket } from "../types/ticket";

export default function TicketList() {
  let { isFetched, data: tickets } = useQuery<Ticket[], Error>({
    queryFn: getTickets,
    queryKey: ["tickets"],
  });
  if (tickets) tickets = tickets.filter((t) => t.done == false);

  return (
    isFetched &&
    tickets && <TicketsList tickets={tickets} ticketTypes="offene" />
  );
}
