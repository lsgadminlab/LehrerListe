import { Ticket } from "../types/ticket";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTicket, updateTicket } from "../api/tickets";
import { useNavigate } from "react-router-dom";

const TicketButtons = ({ ticket }: { ticket: Ticket }) => {
  const navigate = useNavigate();
  const updateMutation = useMutation<Ticket, Error>({
    mutationFn: async () => {
      console.log(ticket.done + " - ");
      console.log(ticket);
      return await updateTicket({ ...ticket, done: !ticket.done });
    },
    mutationKey: ["tickets" + ticket.id],
  });
  const deleteMutation = useMutation<any, Error>({
    mutationFn: async () => await deleteTicket(ticket.id),
    mutationKey: ["tickets"],
  });
  const queryClient = useQueryClient();
  return (
    <>
      <button
        className="btn btn-primary w-11/12 m-auto my-3"
        onClick={async () => {
          await updateMutation.mutateAsync();
          queryClient.invalidateQueries(["ticket" + ticket.id]);
        }}
      >
        {ticket.done ? "Ticket Wiedereröffnen" : "Ticket Schließen"}
      </button>
      <button
        className="btn btn-secondary  w-11/12 m-auto my-3"
        onClick={async () => {
          await deleteMutation.mutateAsync();
          navigate(-1);
        }}
      >
        Löschen
      </button>
    </>
  );
};

export default TicketButtons;
