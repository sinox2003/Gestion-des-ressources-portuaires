package org.example.stageback.repository;


import org.example.stageback.model.TypeEquipement;
import org.example.stageback.model.parametrage.Trafic;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TypeEquipementRepository extends JpaRepository<TypeEquipement,Long> {

    public List<TypeEquipement> findAllByTraficListContains(Trafic trafic);

}
