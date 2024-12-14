package org.example.stageback.repository;


import org.example.stageback.model.Terminal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TerminalRepository extends JpaRepository<Terminal,Long> {

    Optional<Terminal> findByNom(String nom);
}
