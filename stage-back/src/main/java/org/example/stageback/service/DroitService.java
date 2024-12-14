package org.example.stageback.service;

import org.example.stageback.model.Droit;
import org.example.stageback.repository.DroitRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DroitService {

    private final DroitRepository droitRepository;

    public DroitService(DroitRepository droitRepository) {
        this.droitRepository = droitRepository;
    }

    public List<Droit> getAllDroits(){
        return droitRepository.findAll();
    }

    public Droit getDroitById(Long id){
        return droitRepository.findById(id).orElse(null);
    }

}
