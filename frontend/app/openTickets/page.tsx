import { TicketsList } from "../components/ticketList";
import { getTickets } from "@/lib/data/tickets";

export default async function TicketList() {
  const tickets = await getTickets(false);

  return <TicketsList tickets={tickets} />;
}
