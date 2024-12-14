package org.example.stageback.service.parametrage;

import org.example.stageback.model.parametrage.TypeTrafic;
import org.example.stageback.repository.parametrage.TypeTraficRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeTraficService {

    private final TypeTraficRepository repository;

    public TypeTraficService(TypeTraficRepository repository) {
        this.repository = repository;
    }

    public List<TypeTrafic> findAll() {
        return repository.findAll();
    }

}
