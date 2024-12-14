package org.example.stageback.model.parametrage;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.Views.Views;

@Entity
@Table(name = "fonctions")
@Data
public class Fonction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    @Column(unique = true)
    private String nom;
}
