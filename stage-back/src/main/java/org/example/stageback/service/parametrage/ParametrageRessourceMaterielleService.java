package org.example.stageback.service.parametrage;

import org.example.stageback.repository.parametrage.ParametrageRessourceMaterielleRepository;
import org.springframework.stereotype.Service;

@Service
public class ParametrageRessourceMaterielleService {

    private final ParametrageRessourceMaterielleRepository repository;

    public ParametrageRessourceMaterielleService(ParametrageRessourceMaterielleRepository repository) {
        this.repository = repository;
    }

}
