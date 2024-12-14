package org.example.stageback.service.parametrage.manutention;

import org.example.stageback.model.parametrage.manutention.OperationManutention;
import org.example.stageback.repository.parametrage.manutention.OperationManutentionRepository;
import org.springframework.stereotype.Service;

@Service
public class OperationManutentionService {

    private final OperationManutentionRepository operationManutentionRepository;

    public OperationManutentionService(OperationManutentionRepository operationManutentionRepository) {
        this.operationManutentionRepository = operationManutentionRepository;
    }

    public OperationManutention saveOrUpdate(OperationManutention operationManutention){
        return operationManutentionRepository.save(operationManutention);
    }

    public void deleteById(Long id){
        operationManutentionRepository.deleteById(id);
    }

    public Iterable<OperationManutention> getAllOperationsManutentions(){
        return operationManutentionRepository.findAll();
    }

    public OperationManutention findById(Long id) {
        return operationManutentionRepository.findById(id).orElse(null);
    }
}
