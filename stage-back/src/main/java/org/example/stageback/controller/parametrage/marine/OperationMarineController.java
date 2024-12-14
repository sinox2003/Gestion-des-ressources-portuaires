package org.example.stageback.controller.parametrage.marine;

import org.example.stageback.model.parametrage.marine.OperationMarine;
import org.example.stageback.service.parametrage.marine.OperationMarineService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/operations/marine")
public class OperationMarineController {

    private final OperationMarineService service;

    public OperationMarineController(OperationMarineService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<OperationMarine> getOperationMarineById(@PathVariable Long id) {
        OperationMarine operationManutention = service.findById(id);
        return operationManutention != null ? ResponseEntity.ok(operationManutention) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<OperationMarine> createOperationMarine(@RequestBody OperationMarine operationManutention) {
        OperationMarine savedOperationMarine = service.saveOrUpdate(operationManutention);
        return ResponseEntity.ok(savedOperationMarine);
    }

    @PutMapping("")
    public ResponseEntity<OperationMarine> updateOperationMarine( @RequestBody OperationMarine operationManutention) {
        return operationManutention != null ? ResponseEntity.ok(service.saveOrUpdate(operationManutention)) : ResponseEntity.notFound().build();

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOperationMarine(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }



}
