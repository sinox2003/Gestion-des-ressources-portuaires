package org.example.stageback.service.parametrage;

import org.example.stageback.model.parametrage.Navire;
import org.example.stageback.repository.parametrage.NavireRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NavireService  {

    private final NavireRepository repository;


    public NavireService(NavireRepository repository) {
        this.repository = repository;
    }

    public List<Navire> findAll() {
        return repository.findAll();
    }
}
