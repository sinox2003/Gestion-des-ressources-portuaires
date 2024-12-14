package org.example.stageback.repository;

import org.example.stageback.model.Equipement;
import org.example.stageback.model.TypeEquipement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EquipementRepository extends JpaRepository<Equipement,Long> {


}
