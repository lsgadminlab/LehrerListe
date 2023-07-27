package de.musin.lsg.tickets.service;

import de.musin.lsg.tickets.exceptions.TicketNotFoundException;
import de.musin.lsg.tickets.persistence.ticket.Ticket;
import de.musin.lsg.tickets.persistence.ticket.TicketRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TicketService {
    private TicketRepository ticketRepository;
    private ModelMapper modelMapper;
    public Ticket createTicket(Ticket ticket){
        ticket.setId(null);
        return ticketRepository.save(ticket);
    }
    public void deleteTicket(Long id){
        Optional<Ticket> ticketOptional = ticketRepository.findById(id);
        if(ticketOptional.isEmpty()) throw new TicketNotFoundException();
        ticketRepository.deleteById(id);
    }
    public List<Ticket> getTickets(){
        return ticketRepository.findAll();
    }
    @Transactional
    public Ticket updateTicket(Ticket ticket, Long id){
        Optional<Ticket> ticketOptional = ticketRepository.findById(id);
        if(ticketOptional.isEmpty()) throw new TicketNotFoundException();
        ticket.setId(id);
        modelMapper.map(ticket, ticketOptional.get());
        return ticketOptional.get();
    }
}
