package org.example.stageback.repository.parametrage;

import org.example.stageback.model.parametrage.Fonction;
import org.example.stageback.model.parametrage.MembrePersonnel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

public interface MembrePersonnelRepository extends JpaRepository<MembrePersonnel,String> {


    Optional<MembrePersonnel> findByMatricule(String matricule);

    @Query(value = "SELECT * FROM personnel WHERE LOWER(matricule) LIKE LOWER(CONCAT('%',:matricule,'%')) AND terminal_id=:terminalId LIMIT 4", nativeQuery = true)
    List<MembrePersonnel> findByMatriculeContaining(@Param("matricule") String matricule,@Param("terminalId") Long terminalId);

    void deleteByMatricule(String matricule);

    @Query(value = "SELECT * FROM personnel WHERE terminal_id = :terminalId LIMIT 4", nativeQuery = true)
    List<MembrePersonnel> getFourMembers(@Param("terminalId") Long terminalId);

    @Query(value = "SELECT * FROM personnel WHERE terminal_id = :terminalId AND equipe_id IS NULL", nativeQuery = true)
    List<MembrePersonnel> findPersonnelByTerminalIdWithoutEquipe(@Param("terminalId") Long terminalId);

    List<MembrePersonnel> findAllByTerminalId(Long terminalId);


    Optional<List<MembrePersonnel>> findAllByFonction(Fonction fonction);

    void deleteAllByTerminalId(Long terminalId);
}
