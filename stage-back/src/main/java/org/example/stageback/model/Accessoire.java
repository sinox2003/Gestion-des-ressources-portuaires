package org.example.stageback.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="accessoires")
public class Accessoire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;


}
