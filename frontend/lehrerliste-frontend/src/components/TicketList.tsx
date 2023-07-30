import { Link, useNavigate } from "react-router-dom";

import { Ticket } from "../types/ticket";
import { useState } from "react";

interface TicketsListProps {
  tickets: Ticket[];
  ticketTypes: "offene" | "geschlossene";
}

export const TicketsList = ({ tickets, ticketTypes }: TicketsListProps) => {
  const [teacherFilter, setTeacherFilter] = useState("");
  const [roomFilter, setRoomFilter] = useState<string>();
  const [timeSort, setTimeSort] = useState<"asc" | "desc">("desc");

  return (
    <>
      <h1 className="text-3xl font-bold text-center">{` ${tickets.length} ${ticketTypes} Tickets`}</h1>

      <div className="form-control w-full flex flex-row justify-start ">
        <input
          type="text"
          placeholder="Kürzel"
          className="input input-bordered w-full max-w-xs m-2"
          onInput={(e) => {
            setTeacherFilter(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="Raum"
          className="input input-bordered w-full max-w-xs m-2"
          onInput={(e) => {
            setRoomFilter(e.currentTarget.value);
          }}
        />
        <select
          className="select select-bordered w-full max-w-xs m-2"
          onChange={(e) => {
            setTimeSort(e.currentTarget.value as "asc" | "desc");
          }}
        >
          <option value="desc">Neuste zuerst</option>
          <option value="asc">Älteste zuerst</option>
        </select>
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
                  if (timeSort === "asc") {
                    return a.created > b.created ? 1 : -1;
                  } else {
                    return b.created > a.created ? 1 : -1;
                  }
                })
                .filter((ticket) => {
                  // if it somewhat matches
                  if (teacherFilter === "") return true;
                  return ticket.teacher
                    .toLowerCase()
                    .includes(teacherFilter.toLowerCase());
                })
                .filter((ticket) => {
                  // filter room, also works if roomFilter is undefined and if there is a . in the room: 4.101 = 4101
                  if (roomFilter === undefined) return true;
                  const room = ticket.room.replace(".", "");
                  const filterFilter = roomFilter.replace(".", "");
                  return room.includes(filterFilter);
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
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <tr
      className="hover"
      onClick={() => {
        if (width > 640) navigate("/ticket/" + props.ticket.id);
      }}
    >
      <th>{props.ticket.room}</th>
      <td>{props.ticket.teacher}</td>
      <td>{new Date(props.ticket.created).toDateString()}</td>
      <td>
        <Link className="btn sm:hidden " to={"/ticket/" + props.ticket.id}>
          Details
        </Link>
        <div className="hidden sm:flex">{props.ticket.description}</div>
      </td>
    </tr>
  );
};
