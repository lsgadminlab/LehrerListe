"use client";

import { Ticket } from "@/lib/types/ticket";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "@/app/components/Atoms/InputField";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

interface TicketsListProps {
  tickets: Ticket[];
}

export const TicketsList = ({ tickets }: TicketsListProps) => {
  const [filterLehrer, setFilterLehrer] = useState("");

  return (
    <>
      <InputField
        title="Kürzel"
        onChange={setFilterLehrer}
        value={filterLehrer}
      ></InputField>
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
              <TableRow ticket={t}></TableRow>
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
        <Link className="btn" href={"/ticket/" + props.ticket.id}>
          Details
        </Link>
      </td>
    </tr>
  );
};
