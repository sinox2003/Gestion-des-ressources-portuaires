package org.example.stageback.model.parametrage;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.stageback.Views.Views;
import org.example.stageback.enums.ModeTravailJour;
import org.example.stageback.enums.ModeTravailSemaine;

@Entity
@Data
@NoArgsConstructor
public class ModeTravail {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Long id;

    @Enumerated
    private ModeTravailSemaine semaine;

    @Enumerated
    private ModeTravailJour jour;

    public ModeTravail(ModeTravailSemaine semaine, ModeTravailJour jour) {
        this.semaine = semaine;
        this.jour = jour;
    }


}
