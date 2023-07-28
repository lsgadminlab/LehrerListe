"use client";
import { changeDone, deleteTicket } from "@/lib/data/tickets";
import { Ticket } from "@/lib/types/ticket";
import { useRouter } from "next/navigation";
import React from "react";

const TicketButtons = ({ ticket }: { ticket: Ticket }) => {
  const router = useRouter();
  return (
    <>
      <button
        className="btn btn-primary m-3"
        onClick={async () => {
          await changeDone(ticket);
          router.refresh();
        }}
      >
        {ticket.done ? "Reopen" : "Close"}
      </button>
      <button
        className="btn btn-secondary m-3"
        onClick={async () => {
          await deleteTicket(ticket.id);
          router.back();
          router.refresh();
        }}
      >
        Delete
      </button>
    </>
  );
};

export default TicketButtons;
