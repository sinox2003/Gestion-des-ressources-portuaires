package org.example.stageback.service;

import org.example.stageback.model.Accessoire;
import org.example.stageback.repository.AccessoireRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccessoireService {
    private final AccessoireRepository accessoireRepository;

    public AccessoireService(AccessoireRepository accessoireRepository) {
        this.accessoireRepository = accessoireRepository;
    }

    public List<Accessoire> getAllAccessoire() {
        return accessoireRepository.findAll();
    }

    public Accessoire getAccessoireById(Long id) {
        return accessoireRepository.findById(id).orElse(null);
    }

}
