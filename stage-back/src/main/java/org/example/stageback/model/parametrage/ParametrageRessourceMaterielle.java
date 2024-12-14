package org.example.stageback.model.parametrage;

import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.model.Accessoire;
import org.example.stageback.model.Equipement;

import java.util.Set;

@Entity
@Data
@Table(name = "parametrage_ressources_materielles")
public class ParametrageRessourceMaterielle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    @JoinTable(
            name = "parametrage_ressources_materielles_equipement",
            joinColumns = @JoinColumn(name = "ressources_materielles_id"),
            inverseJoinColumns = @JoinColumn(name = "equipement_id")
    )
    private Set<Equipement> equipements;

    @ManyToMany
    @JoinTable(
            name = "parametrage_ressources_materielles_accessoire",
            joinColumns = @JoinColumn(name = "ressources_materielles_id"),
            inverseJoinColumns = @JoinColumn(name = "accessoire_id")
    )
    private Set<Accessoire> accessoires;

}
