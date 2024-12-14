package org.example.stageback.service;

import org.example.stageback.model.TypeEquipement;
import org.example.stageback.model.parametrage.Trafic;
import org.example.stageback.repository.TypeEquipementRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeEquipementService {
    private final TypeEquipementRepository repository;
    public TypeEquipementService(TypeEquipementRepository repository) {
        this.repository = repository;
    }

    public TypeEquipement findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<TypeEquipement> findAll() {
        return repository.findAll();
    }

    public List<TypeEquipement> findAllByTraficList(Trafic trafic){
        return repository.findAllByTraficListContains(trafic);
    }


}
