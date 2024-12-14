package org.example.stageback.model.parametrage;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.Views.Views;
import org.example.stageback.model.Terminal;

@Entity
@Data
@Table(name = "personnel")
public class MembrePersonnel {


    @Id
    private String matricule;

    private String nom;

    private String prenom;

    @ManyToOne
    private Fonction fonction;


    @ManyToOne
    @JsonIgnore
    private Terminal terminal;


}
