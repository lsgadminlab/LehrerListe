import { Ticket } from "../types/ticket";

const url = "http://localhost:8080/api/v1/";

export const getTickets = async (done: Boolean): Promise<Ticket[]> => {
    const fetchres = await fetch(url + "tickets/",
        {
            cache: "no-cache",
        }
    );
    const data: Ticket[] = await fetchres.json();
    return data.filter((ticket) => ticket.done === done);
};

export const sendTicket = async (ticket: Ticket): Promise<Response> => {
    return await fetch(url + "tickets/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify(ticket),
    });
}

export const getTicket = async (id: number): Promise<Ticket> => {
    const fetchres = await fetch(url + "tickets/" + id,
        {
            cache: "no-cache",
        }
    );
    return await fetchres.json();;
};

export const changeDone = async (ticket: Ticket): Promise<Ticket> => {
    ticket.done = !ticket.done;
    const fetchres = await fetch(url + "tickets/" + ticket.id,
        {
            method: "PUT",
            cache: "no-cache",
            body: JSON.stringify(ticket),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return await fetchres.json()
}
export const deleteTicket = async (id: number): Promise<void> => {
    await fetch(url + "tickets/" + id,
        {
            method: "DELETE",
            cache: "no-cache",
        }
    );
}