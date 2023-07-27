import { Ticket } from "@/lib/types/ticket";

interface TicketsListProps {
  tickets: Ticket[];
}

export const TicketsList = ({ tickets }: TicketsListProps) => {
  return (
    <>
      <div className="relative">
        <table className="table">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Teacher</th>
              <th>Description</th>
              <th>Date</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => {
              return tableRow(ticket);
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
const tableRow = ({ room, teacher, description, created, done }: Ticket) => {
  return (
    <tr className="hover">
      <th>{room}</th>
      <td>{teacher}</td>
      <td>{description}</td>
      <td>{String(created)}</td>
      <td>{String(done)}</td>
    </tr>
  );
};
