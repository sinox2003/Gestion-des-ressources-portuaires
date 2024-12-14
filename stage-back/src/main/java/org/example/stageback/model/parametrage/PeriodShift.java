package org.example.stageback.model.parametrage;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.Views.Views;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
public class PeriodShift {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalTime startNormalPeriod;


    @Column(nullable = false)
    private LocalTime startRamadanPeriod;

    private LocalDate ramadanStartDate;

    private LocalDate ramadanEndDate;

}
