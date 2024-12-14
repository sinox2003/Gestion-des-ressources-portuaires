package org.example.stageback.model.parametrage;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "type_trafic")
public class TypeTrafic {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

}
