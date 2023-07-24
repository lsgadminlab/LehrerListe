package de.musin.lsg.tickets.exceptions;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class TicketException extends RuntimeException{
    private final HttpStatus status;
    private final ErrorMessage errorMessage;
    public TicketException(String message, HttpStatus status) {
        this.status = status;
        this.errorMessage = new ErrorMessage(message);
    }
}
