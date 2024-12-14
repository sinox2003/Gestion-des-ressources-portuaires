package org.example.stageback.model.parametrage.manutention;

import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.model.parametrage.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class MainTheoriqueManutention {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    @ManyToOne
    @JoinColumn(name = "prestation_id")
    private Prestation prestation;

    @ManyToOne
    @JoinColumn(name = "type_trafic_id")
    private TypeTrafic typeTrafic ;

    @ManyToOne
    @JoinColumn(name = "trafic_id")
    private Trafic trafic ;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "main_theorique_manutention_id")
    private List<ParametrageRessourceHumaine> ressourcesHumaines = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL)
    private ParametrageRessourceMaterielle ressourcesMaterielles ;

}
