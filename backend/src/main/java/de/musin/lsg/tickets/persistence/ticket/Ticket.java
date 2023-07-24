package de.musin.lsg.tickets.persistence.ticket;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "tickets")
@Data
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String teacher;
    private String room;
    private String description;
    private Date created;
}
