package org.example.stageback.repository.parametrage;

import org.example.stageback.enums.TypePrestation;
import org.example.stageback.model.parametrage.Prestation;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PrestationRepository extends JpaRepository<Prestation,Long> {


    List<Prestation> findAllByType(TypePrestation typePrestation);
}
