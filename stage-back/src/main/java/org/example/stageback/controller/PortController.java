package org.example.stageback.controller;

import com.fasterxml.jackson.annotation.JsonView;
import org.example.stageback.Views.Views;
import org.example.stageback.model.Port;
import org.example.stageback.service.PortService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ports")
public class PortController {
    private final PortService portService;

    public PortController(PortService portService) {
        this.portService = portService;
    }

    @PostMapping
    public ResponseEntity<Port> createPort(@RequestBody Port port) {
        Port createdPort = portService.saveOrUpdate(port);
        return ResponseEntity.ok(createdPort);
    }

    @PutMapping("")
    public ResponseEntity<Port> updatePort( @RequestBody Port portDetails) {
        Port updatedPort = portService.saveOrUpdate(portDetails);
        return ResponseEntity.ok(updatedPort);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Port> getPortById(@PathVariable Long id) {
        Port port = portService.getPortById(id);
        return port != null ? ResponseEntity.ok(port) : ResponseEntity.notFound().build();
    }

    @JsonView(Views.PortWithOperationIds.class)
    @GetMapping
    public ResponseEntity<List<Port>> getAllPorts() {
        List<Port> ports = portService.findAll();
        return ResponseEntity.ok(ports);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePort(@PathVariable Long id) {
        portService.deletePort(id);
        return ResponseEntity.noContent().build();
    }

}
