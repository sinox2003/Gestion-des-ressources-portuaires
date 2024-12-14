package org.example.stageback.service.parametrage;

import org.example.stageback.repository.parametrage.ParametrageRessourceHumaineRepository;
import org.springframework.stereotype.Service;

@Service
public class ParametrageRessourceHumaineService {

    private final ParametrageRessourceHumaineRepository repository;


    public ParametrageRessourceHumaineService(ParametrageRessourceHumaineRepository repository) {
        this.repository = repository;
    }

}
