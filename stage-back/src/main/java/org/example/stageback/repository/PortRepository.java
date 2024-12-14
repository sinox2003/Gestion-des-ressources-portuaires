package org.example.stageback.repository;

import org.example.stageback.model.Port;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PortRepository extends JpaRepository<Port,Long> {

    Optional<Port> findByNom(String nom);

}
