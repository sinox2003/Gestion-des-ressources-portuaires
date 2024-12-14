package org.example.stageback.service.parametrage.logistique;

import org.example.stageback.model.parametrage.logistique.OperationLogistique;
import org.example.stageback.repository.parametrage.logistique.OperationLogistiqueRepository;
import org.springframework.stereotype.Service;

@Service
public class OperationLogistiqueService {

    private  final OperationLogistiqueRepository repository;

    public OperationLogistiqueService(OperationLogistiqueRepository repository) {
        this.repository = repository;
    }

    public OperationLogistique findById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public OperationLogistique saveOrUpdate(OperationLogistique operation){
        return repository.save(operation);
    }

    public void deleteById(Long id) {
         repository.deleteById(id);
    }

}
