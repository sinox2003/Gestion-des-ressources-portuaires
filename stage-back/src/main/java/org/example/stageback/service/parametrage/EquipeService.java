package org.example.stageback.service.parametrage;

import org.example.stageback.model.parametrage.Equipe;
import org.example.stageback.repository.parametrage.EquipeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipeService {

    private  final EquipeRepository equipeRepository;

    public EquipeService(EquipeRepository equipeRepository) {
        this.equipeRepository = equipeRepository;
    }

    public Equipe getEquipeById(String id) {
        return equipeRepository.findById(id).orElse(null);
    }

    public List<Equipe> getAllEquipes() {
        return equipeRepository.findAll();
    }

    public Equipe saveOrUpdate(Equipe equipe) {
        return this.equipeRepository.save(equipe);
    }

    public void deleteEquipeById(String id) {
        equipeRepository.deleteById(id);
    }


}
