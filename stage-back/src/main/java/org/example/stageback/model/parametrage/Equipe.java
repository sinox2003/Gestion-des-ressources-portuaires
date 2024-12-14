package org.example.stageback.model.parametrage;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;

import lombok.Data;
import org.example.stageback.Views.Views;
import org.example.stageback.enums.Shift;

import java.util.List;

@Entity
@Data
public class Equipe {
    @Id
    private String id;

    private String nom;



    @OneToOne
    private MembrePersonnel responsable;

    @OneToMany
    @JoinColumn(name = "equipe_id")
    private List<MembrePersonnel> personnel;


    @Enumerated(EnumType.STRING)
    private Shift shift;
}
