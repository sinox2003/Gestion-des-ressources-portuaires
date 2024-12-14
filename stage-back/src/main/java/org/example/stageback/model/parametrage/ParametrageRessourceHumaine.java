package org.example.stageback.model.parametrage;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Entity
@Data
@Table(name = "parametrage_ressources_humaines")
public class ParametrageRessourceHumaine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "fonction_id",nullable = false)
    private Fonction fonction;

    @Column(nullable = false)
    private Long totale;

    private Long bord;

    private Long quai;

    private Long arriere;

    private Long maximum;


    private boolean maximum_obligatoire=false;

}
