package org.example.stageback.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.model.parametrage.Trafic;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Data

public class TypeEquipement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "type_equipement_trafic",
            joinColumns = @JoinColumn(name = "type_equipement"),
            inverseJoinColumns = @JoinColumn(name="trafic"))
    private Set<Trafic> traficList;
}


