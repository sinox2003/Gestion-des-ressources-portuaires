package org.example.stageback.service;

import org.example.stageback.model.Equipement;
import org.example.stageback.repository.EquipementRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipementService {

    private final EquipementRepository equipementRepository;

    public EquipementService(EquipementRepository equipementRepository) {
        this.equipementRepository = equipementRepository;
    }

    public List<Equipement> getEquipments() {
        return equipementRepository.findAll();
    }

    public Equipement getEquipementById(Long id) {
        return equipementRepository.findById(id).orElse(null);
    }



}
