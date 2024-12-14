package org.example.stageback.controller.parametrage.logistique;

import org.example.stageback.model.parametrage.logistique.OperationLogistique;
import org.example.stageback.service.parametrage.logistique.OperationLogistiqueService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/operations/logistique")
public class OperationLogistiqueController {

    private final OperationLogistiqueService service;

    public OperationLogistiqueController(OperationLogistiqueService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<OperationLogistique> getOperationLogistiqueById(@PathVariable Long id) {
        OperationLogistique operationManutention = service.findById(id);
        return operationManutention != null ? ResponseEntity.ok(operationManutention) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<OperationLogistique> createOperationLogistique(@RequestBody OperationLogistique operationManutention) {
        OperationLogistique savedOperationLogistique = service.saveOrUpdate(operationManutention);
        return ResponseEntity.ok(savedOperationLogistique);
    }

    @PutMapping("")
    public ResponseEntity<OperationLogistique> updateOperationLogistique( @RequestBody OperationLogistique operationManutention) {
        return operationManutention != null ? ResponseEntity.ok(service.saveOrUpdate(operationManutention)) : ResponseEntity.notFound().build();

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOperationLogistique(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }


}
