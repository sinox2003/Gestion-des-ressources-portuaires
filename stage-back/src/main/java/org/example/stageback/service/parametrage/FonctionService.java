package org.example.stageback.service.parametrage;

import org.example.stageback.model.parametrage.Fonction;
import org.example.stageback.repository.parametrage.FonctionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FonctionService {

    private final FonctionRepository fonctionRepository;

    public FonctionService(FonctionRepository fonctionRepository) {
        this.fonctionRepository = fonctionRepository;
    }

    public List<Fonction> getFonctionList() {
        return fonctionRepository.findAll();
    }

    public Fonction getFonctionById(Long id) {
        return fonctionRepository.findById(id).orElse(null);
    }

    public Fonction saveOrUpdate(Fonction fonction) {
        return fonctionRepository.save(fonction);
    }

}
