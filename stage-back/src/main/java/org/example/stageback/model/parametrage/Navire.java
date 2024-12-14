package org.example.stageback.model.parametrage;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "navires")
@Data

public class Navire {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
}
