package org.example.stageback.service.parametrage.marine;

import org.example.stageback.model.parametrage.marine.MainTheoriqueMarine;
import org.example.stageback.repository.parametrage.marine.MainTheoriqueMarineRepository;
import org.springframework.stereotype.Service;

@Service
public class MainTheoriqueMarineService {

    private final MainTheoriqueMarineRepository repository;

    public MainTheoriqueMarineService(MainTheoriqueMarineRepository repository) {
        this.repository = repository;
    }

    public MainTheoriqueMarine saveOrUpdate(MainTheoriqueMarine mainTheoriqueMarine){
        return repository.save(mainTheoriqueMarine);
    }

    public void deleteById(Long id){
        repository.deleteById(id);
    }

}
