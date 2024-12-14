package org.example.stageback.model;


import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.stageback.Views.Views;

import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@Table(name = "ports")
public class Port {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @JsonView(Views.PortWithOperationIds.class)
    private Long id;

    @JsonView(Views.PortWithOperationIds.class)
    private String nom;

    @OneToMany(cascade = CascadeType.ALL)
    @JsonView(Views.PortWithOperationIds.class)
    private Set<Terminal> terminals;

    public Port(String nom) {
        this.nom = nom;
    }

}
