import { Link } from "react-router-dom";
import { Ticket } from "../types/ticket";

interface TicketsListProps {
  tickets: Ticket[];
}

export const TicketsList = ({ tickets }: TicketsListProps) => {
  return (
    <>
      <div className="overflow-x-auto ">
        <table className="table table-zebra table-lg">
          <thead>
            <tr>
              <th>Raum</th>
              <th>Kürzel</th>
              <th>Erstellt</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t) => (
              <TableRow ticket={t} key={t.id}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
const TableRow = (props: { ticket: Ticket }) => {
  return (
    <tr className="hover">
      <th>{props.ticket.room}</th>
      <td>{props.ticket.teacher}</td>
      <td>{new Date(props.ticket.created).toDateString()}</td>
      <td>
        <Link className="btn" to={"/ticket/" + props.ticket.id}>
          Details
        </Link>
      </td>
    </tr>
  );
};
