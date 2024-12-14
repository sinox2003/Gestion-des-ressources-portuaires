package org.example.stageback.model.parametrage;

import jakarta.persistence.*;
import lombok.Data;
import org.example.stageback.enums.TypePrestation;

@Entity
@Data
public class Prestation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private TypePrestation type;

    private String nom;

}
