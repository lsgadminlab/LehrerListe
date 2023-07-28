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
    @Column(length = 5000)
    private String description;
    private Date created;
    @Enumerated(value = EnumType.STRING)
    private Priority priority;
    private boolean done;
}
