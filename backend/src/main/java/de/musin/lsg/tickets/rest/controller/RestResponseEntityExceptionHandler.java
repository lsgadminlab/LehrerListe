package de.musin.lsg.tickets.rest.controller;

import de.musin.lsg.tickets.exceptions.TicketException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.sql.SQLException;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = {SQLException.class})
    protected ResponseEntity<Object> handleSQLException(SQLException ex, WebRequest request) {
        return handleExceptionInternal(
                ex,
                "an unexpected database error occurred",
                new HttpHeaders(),
                HttpStatus.INTERNAL_SERVER_ERROR,
                request
        );
    }
    @ExceptionHandler(value = {TicketException.class})
    protected ResponseEntity<Object> handleTicketException(TicketException ex, WebRequest request) {
        return handleExceptionInternal(
                ex,
                ex.getErrorMessage(),
                new HttpHeaders(),
                ex.getStatus(),
                request
        );
    }
}
