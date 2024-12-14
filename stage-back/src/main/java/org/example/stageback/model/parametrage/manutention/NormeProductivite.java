package org.example.stageback.model.parametrage.manutention;

import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.model.parametrage.Trafic;

@Entity
@Data
@Table(name = "norme_productivite")
public class NormeProductivite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Trafic trafic;

    @ManyToOne
    private MainTheoriqueManutention mainTheorique;

    private String mode;

    private Long norme;

    private boolean sensExport;

    private boolean sensImport;

    private String natureSuivi;


}
