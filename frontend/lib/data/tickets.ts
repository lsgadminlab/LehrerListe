import { Ticket } from "../types/ticket";

const url = "http://192.168.178.69:10273/api/v1/";

export const getTickets = async (done: Boolean): Promise<Ticket[]> => {
    const fetchres = await fetch(url+"tickets/",
    {
        cache: "no-cache",
    }
    );
    const data: Ticket[] = await fetchres.json();
    return data.filter((ticket) => ticket.done === done);
};

export const sendTicket = async (ticket:Ticket): Promise<Response> => {
    return await fetch(url+"tickets/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify(ticket),
    });
}


