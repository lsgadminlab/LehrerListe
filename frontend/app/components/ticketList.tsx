export const TicketsList = () => {
  const currentDate = new Date();
  const TimeStamp =
    currentDate.getDate() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getFullYear();
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Raumnummer</th>
            <th>Lehrerkürzel</th>
            <th>Beschreibung</th>
            <th>Erstellungsdatum</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1216</th>
            <td>KUW</td>
            <td>Tastatur am Computer zerstört</td>
            <td>{TimeStamp}</td>
          </tr>
          {/* row 2 */}
          <tr className="hover">
            <th>4102</th>
            <td>BHG</td>
            <td>Monitor am LehrerPC zerkratzt</td>
            <td>{TimeStamp}</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>2103</th>
            <td>MUN</td>
            <td>LAN funktioniert nicht</td>
            <td>{TimeStamp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
