package org.example.stageback.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.example.stageback.Views.Views;
import org.example.stageback.model.parametrage.MembrePersonnel;
import org.example.stageback.model.parametrage.logistique.OperationLogistique;
import org.example.stageback.model.parametrage.manutention.OperationManutention;
import org.example.stageback.model.parametrage.marine.OperationMarine;

import java.util.List;

@Entity
@Data
@Table(name="terminaux")
@NoArgsConstructor
@JsonView(Views.PortWithOperationIds.class)
public class Terminal {


    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String nom;

    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.REMOVE})
    @EqualsAndHashCode.Exclude
    private OperationManutention operationManutention;

    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.REMOVE})
    @EqualsAndHashCode.Exclude
    private OperationMarine operationMarine;

    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.REMOVE})
    @EqualsAndHashCode.Exclude
    private OperationLogistique operationLogistique;



    public Terminal(String nom) {
        this.nom = nom;
    }




}
