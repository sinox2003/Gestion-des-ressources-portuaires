package org.example.stageback.service.parametrage;

import org.example.stageback.model.parametrage.ModeTravail;
import org.example.stageback.repository.parametrage.ModeTravailRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModeTravailService {

    private final ModeTravailRepository modeTravailRepository;

    public ModeTravailService(ModeTravailRepository modeTravailRepository) {
        this.modeTravailRepository = modeTravailRepository;
    }

    public ModeTravail getModeTravail(Long id) {
        return this.modeTravailRepository.findById(id).orElseThrow();
    }

    public List<ModeTravail> getAllModeTravails() {
        return this.modeTravailRepository.findAll();
    }

    public ModeTravail saveOrUpdate(ModeTravail modeTravail) {
        return this.modeTravailRepository.save(modeTravail);
    }

    public void deleteModeTravail(Long id) {
        this.modeTravailRepository.deleteById(id);
    }

}
