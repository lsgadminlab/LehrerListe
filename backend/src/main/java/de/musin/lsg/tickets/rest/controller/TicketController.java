package de.musin.lsg.tickets.rest.controller;

import de.musin.lsg.tickets.persistence.ticket.Ticket;
import de.musin.lsg.tickets.service.TicketService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/tickets")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class TicketController {
    private TicketService ticketService;
    @GetMapping(path = "/")
    public List<Ticket> getTickets(){
        return ticketService.getTickets();
    }
    @PostMapping(path = "/")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Ticket postTicket(@RequestBody Ticket ticket){
        return ticketService.createTicket(ticket);
    }
    @DeleteMapping(path = "/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteTicket(@PathVariable Long id){
        ticketService.deleteTicket(id);
    }
    @PutMapping(path = "/{id}")
    public Ticket putTicket(@RequestBody Ticket ticket, @PathVariable Long id){
        return ticketService.updateTicket(ticket, id);
    }
}
