const TicketStat = (props: { title: string; value: string }) => {
  return (
    <div className="stat">
      <div className="stat-title">{props.title}</div>
      <div className="stat-value text-primary">{props.value}</div>
    </div>
  );
};

export default TicketStat;
