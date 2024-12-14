package org.example.stageback.model.parametrage.marine;

import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.model.parametrage.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class MainTheoriqueMarine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    @ManyToOne
    @JoinColumn(name = "prestation_id")
    private Prestation prestation;

    @ManyToOne
    @JoinColumn(name = "navire_id")
    private Navire navire ;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "main_theorique_marine_id")
    private List<ParametrageRessourceHumaine> ressourcesHumaines = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL)
    private ParametrageRessourceMaterielle ressourcesMaterielles ;

}
