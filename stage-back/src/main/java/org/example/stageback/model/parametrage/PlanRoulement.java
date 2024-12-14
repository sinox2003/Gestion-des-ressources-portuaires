package org.example.stageback.model.parametrage;

import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.enums.TypePlanRoulement;

import java.time.LocalDate;

@Entity
@Data
public class PlanRoulement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.ORDINAL)
    private TypePlanRoulement plan;

    private LocalDate startDate;

    private LocalDate endDate;

}
