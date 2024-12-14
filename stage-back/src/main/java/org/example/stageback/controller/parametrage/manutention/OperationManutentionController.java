package org.example.stageback.controller.parametrage.manutention;

import com.fasterxml.jackson.annotation.JsonView;
import org.example.stageback.Views.Views;
import org.example.stageback.model.parametrage.manutention.OperationManutention;
import org.example.stageback.service.parametrage.manutention.OperationManutentionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/operations/manutention")
public class OperationManutentionController {

    private final OperationManutentionService operationManutentionService;

    public OperationManutentionController(OperationManutentionService operationManutentionService) {
        this.operationManutentionService = operationManutentionService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<OperationManutention> getOperationManutentionById(@PathVariable Long id) {
        OperationManutention operationManutention = operationManutentionService.findById(id);
        return operationManutention != null ? ResponseEntity.ok(operationManutention) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<OperationManutention> createOperationManutention(@RequestBody OperationManutention operationManutention) {
        OperationManutention savedOperationManutention = operationManutentionService.saveOrUpdate(operationManutention);
        return ResponseEntity.ok(savedOperationManutention);
    }

    @PutMapping("")
    public ResponseEntity<OperationManutention> updateOperationManutention( @RequestBody OperationManutention operationManutention) {
        return operationManutention != null ? ResponseEntity.ok(operationManutentionService.saveOrUpdate(operationManutention)) : ResponseEntity.notFound().build();

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOperationManutention(@PathVariable Long id) {
        operationManutentionService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<Iterable<OperationManutention>> getAllOperationsManutentions() {
        Iterable<OperationManutention> operationsManutentions = operationManutentionService.getAllOperationsManutentions();
        return ResponseEntity.ok(operationsManutentions);
    }
}
