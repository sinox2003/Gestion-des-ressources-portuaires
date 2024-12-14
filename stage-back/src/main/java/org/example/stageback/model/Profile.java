package org.example.stageback.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.stageback.enums.NomProfile;

import java.util.Set;


@Entity
@Data
@Table(name = "profiles")

@NoArgsConstructor
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private NomProfile nom;

    @ManyToMany
    @JoinTable(
            name = "profile_droit",
            joinColumns = @JoinColumn(name = "profile_id"),
            inverseJoinColumns = @JoinColumn(name = "droit_id")
    )
    private Set<Droit> droits;



    public Profile(NomProfile nom, Set<Droit> droits) {
        this.nom = nom;
        this.droits = droits;
    }

    public Profile(NomProfile nom) {
        this.nom = nom;

    }
}
