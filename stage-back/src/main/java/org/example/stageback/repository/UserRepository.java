package org.example.stageback.repository;

import org.example.stageback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,String> {

    Optional<User> findUserByMatricule(String matricule);

    Optional<User> deleteUserByMatricule(String matricule);

    @Query(value = "select u.mdp from User u where u.matricule = :matricule")
    String findMdpByMatricule(@Param("matricule") String matricule);

}
