import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Ticket } from "../types/ticket";

interface TicketsListProps {
  tickets: Ticket[];
}

export const TicketsList = ({ tickets }: TicketsListProps) => {
  const [teacherFilter, setTeacherFilter] = useState("");
  const [roomFilter, setRoomFilter] = useState<string>();

  return (
    <>
      <h1 className="text-3xl font-bold text-center">{` ${tickets.length} Tickets`}</h1>

      <div className="form-control w-full flex flex-row justify-start ">
        <input
          type="text"
          placeholder="Kürzel"
          className="input input-bordered w-full max-w-xs m-2"
        />
        <input
          type="text"
          placeholder="Raum"
          className="input input-bordered w-full max-w-xs m-2"
          onInput={(e) => {
            setRoomFilter(e.currentTarget.value);
          }}
        />
      </div>

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
            {
              //first sort after date, then filter after teacher and room but make sure that the filter can be empty and then show all
              tickets
                .sort((a, b) => {
                  return new Date(a.created).getTime() >
                    new Date(b.created).getTime()
                    ? -1
                    : 1;
                })
                .filter((ticket) => {
                  return ticket.teacher.includes(teacherFilter);
                })
                .filter((ticket) => {
                  if (roomFilter === undefined) return true;
                  return ticket.room.startsWith(roomFilter);
                })
                .map((ticket) => {
                  return <TableRow ticket={ticket} key={ticket.id} />;
                })
            }
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
