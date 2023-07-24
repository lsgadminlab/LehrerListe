package de.musin.lsg.tickets.exceptions;

import org.springframework.http.HttpStatus;

public class TicketNotFoundException extends TicketException{
    public TicketNotFoundException(){
        super("ticket not found", HttpStatus.NOT_FOUND);
    }
}
