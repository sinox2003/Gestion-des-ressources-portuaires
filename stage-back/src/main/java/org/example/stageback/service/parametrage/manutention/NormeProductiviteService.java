package org.example.stageback.service.parametrage.manutention;

import org.example.stageback.model.parametrage.manutention.NormeProductivite;
import org.example.stageback.repository.parametrage.manutention.NormeProductiviteRepository;
import org.springframework.stereotype.Service;

@Service
public class NormeProductiviteService {
    private final NormeProductiviteRepository repository;

    public NormeProductiviteService(NormeProductiviteRepository repository) {
        this.repository = repository;
    }

    public NormeProductivite update(NormeProductivite normeProductivite){
        return repository.save(normeProductivite);
    }

    public void deleteById(Long id){
        repository.deleteById(id);
    }

}
