import { Ticket } from "../types/ticket";
import axios from "axios";
const ticketAPI = axios.create({
    baseURL: "https://admins.lab.lcarilla.de/api/v1/"
})
export const getTickets = async (): Promise<Ticket[]> => {
    return (await ticketAPI.get("tickets/")).data
}
export const getTicket = async (id: number): Promise<Ticket> => {
    return (await ticketAPI.get("tickets/" + id)).data
}
export const updateTicket = async (ticket: Ticket): Promise<Ticket> => {
    return (await ticketAPI.put("tickets/" + ticket.id, ticket)).data
}
export const deleteTicket = async (id: number) => {
    return await ticketAPI.delete("tickets/" + id)
}
export const createTicket = async (ticket: Ticket) => {
    return await ticketAPI.post("tickets/", ticket)
}