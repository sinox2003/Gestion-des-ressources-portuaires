package org.example.stageback.model.parametrage.logistique;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.Views.Views;
import org.example.stageback.model.parametrage.Equipe;
import org.example.stageback.model.parametrage.ModeTravail;
import org.example.stageback.model.parametrage.PeriodShift;
import org.example.stageback.model.parametrage.PlanRoulement;
import org.example.stageback.model.parametrage.manutention.MainTheoriqueManutention;

import java.util.Set;

@Entity
@Data
public class OperationLogistique {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(Views.PortWithOperationIds.class)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    private ModeTravail modeTravail;

    @OneToOne(cascade = CascadeType.ALL)
    private PeriodShift periodShift;

    @OneToOne(cascade = CascadeType.ALL)
    private PlanRoulement planRoulement;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "operation_logistique_id")
    private Set<Equipe> equipeList;

}
