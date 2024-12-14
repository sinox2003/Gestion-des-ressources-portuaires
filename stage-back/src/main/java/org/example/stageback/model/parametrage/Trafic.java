package org.example.stageback.model.parametrage;

import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.model.TypeEquipement;

import java.util.List;

@Entity
@Data
public class Trafic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "typre_trafic_id")
    private TypeTrafic typeTrafic;

    private String nom;

}
