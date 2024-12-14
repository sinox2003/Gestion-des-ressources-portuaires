package org.example.stageback.service.parametrage;

import org.example.stageback.enums.TypePrestation;
import org.example.stageback.model.parametrage.Prestation;
import org.example.stageback.repository.parametrage.PrestationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrestationService {

    private final PrestationRepository prestationRepository;

    public PrestationService(PrestationRepository prestationRepository) {
        this.prestationRepository = prestationRepository;
    }

    public List<Prestation> getPrestations() {
        return prestationRepository.findAll();
    }

    public List<Prestation> getManutention_Prestations() {
        return prestationRepository.findAllByType(TypePrestation.Manutention);
    }

    public List<Prestation> getMarine_Prestations() {
        return prestationRepository.findAllByType(TypePrestation.Marine);
    }

    public Prestation getPrestationById(Long id) {
        return prestationRepository.findById(id).orElse(null);
    }



}
