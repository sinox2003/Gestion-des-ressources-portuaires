package org.example.stageback.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "equipements")
public class Equipement {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "type_equipement_id")
    private TypeEquipement type;

    private String nom;



}
