package org.example.stageback.model.parametrage.manutention;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.Views.Views;
import org.example.stageback.model.parametrage.Equipe;
import org.example.stageback.model.parametrage.ModeTravail;
import org.example.stageback.model.parametrage.PeriodShift;
import org.example.stageback.model.parametrage.PlanRoulement;

import java.util.Set;

@Entity
@Data
public class OperationManutention {

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
    @JoinColumn(name = "operation_manutention_id")
    private Set<MainTheoriqueManutention> mainTheorique;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "operation_manutention_id")
    private Set<Equipe> equipeList;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "operation_manutention_id")
    private Set<NormeProductivite> normeProductiviteSet;

}
