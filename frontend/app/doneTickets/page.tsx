import { TicketsList } from "../components/ticketList";
import { getTickets } from "@/lib/data/tickets";

export default async function TicketList() {
  const tickets = await getTickets(true);

  return <TicketsList tickets={tickets} />;
}
