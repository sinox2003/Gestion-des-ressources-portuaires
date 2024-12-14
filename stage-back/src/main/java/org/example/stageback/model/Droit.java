package org.example.stageback.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Entity
@Data
@Table(name = "droits")
@NoArgsConstructor
public class Droit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;



    private String description;


    public Droit(String description, String nom) {
        this.description = description;
        this.nom = nom;
    }
}
