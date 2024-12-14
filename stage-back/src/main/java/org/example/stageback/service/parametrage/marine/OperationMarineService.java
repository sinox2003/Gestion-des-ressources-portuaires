package org.example.stageback.service.parametrage.marine;

import org.example.stageback.model.parametrage.marine.OperationMarine;
import org.example.stageback.repository.parametrage.marine.OperationMarineRepository;
import org.springframework.stereotype.Service;

@Service
public class OperationMarineService {

    private final OperationMarineRepository repository;


    public OperationMarineService(OperationMarineRepository repository) {
        this.repository = repository;
    }

    public OperationMarine findById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public  OperationMarine saveOrUpdate(OperationMarine operation){
        return repository.save(operation);
    }

    public  void deleteById(Long id) {
         repository.deleteById(id);
    }

}
