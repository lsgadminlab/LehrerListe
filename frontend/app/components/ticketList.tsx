const data = [
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
  {
    roomNumber: 2103,
    teacher: "MUN",
    description: "LAN funktioniert nicht",
    date: "21.06.2021",
  },
];

export const TicketsList = () => {
  return (
    <div className="container mx-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Teacher</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ticket) => {
            return tableRow(ticket);
          })}
        </tbody>
      </table>
    </div>
  );
};

interface tableRowProps {
  roomNumber: number;
  teacher: string;
  description: string;
  date: string;
}

const tableRow = ({
  roomNumber,
  teacher,
  description,
  date,
}: tableRowProps) => {
  return (
    <tr className="hover">
      <th>{roomNumber}</th>
      <td>{teacher}</td>
      <td>{description}</td>
      <td>{date}</td>
    </tr>
  );
};
