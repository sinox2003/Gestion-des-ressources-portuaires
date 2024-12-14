package org.example.stageback.controller;

import org.example.stageback.model.Terminal;
import org.example.stageback.service.TerminalService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/terminals")
public class TerminalController {

    private final TerminalService terminalService;

    public TerminalController(TerminalService terminalService) {
        this.terminalService = terminalService;
    }

    // Get all terminals
    @GetMapping
    public ResponseEntity<List<Terminal>> getAllTerminals() {
        List<Terminal> terminals = terminalService.getAllTerminals();
        return ResponseEntity.ok(terminals);
    }

    // Get terminal by ID
    @GetMapping("/{id}")
    public ResponseEntity<Terminal> getTerminalById(@PathVariable Long id) {
        Terminal terminal = terminalService.getTerminalById(id);
        if (terminal != null) {
            return ResponseEntity.ok(terminal);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Terminal> saveOrUpdateTerminal(@RequestBody Terminal terminal) {
        // If terminal only has a name (nom), create a new instance
        if (terminal.getId() == null && terminal.getNom() != null) {
            terminal = new Terminal(terminal.getNom());
//            if(terminal.getPort() != null) {
//                terminal.setPort(terminal.getPort());
//            }
        }
        Terminal savedTerminal = terminalService.saveOrUpdate(terminal);
        return ResponseEntity.ok(savedTerminal);
    }

    @PutMapping
    public ResponseEntity<Terminal> updatePort( @RequestBody Terminal portDetails) {
        Terminal updatedPort = terminalService.saveOrUpdate(portDetails);
        return ResponseEntity.ok(updatedPort);
    }



    // Delete a terminal by ID
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteTerminalById(@PathVariable Long id) {
//        terminalService.deleteTerminalById(id);
//        return ResponseEntity.noContent().build();
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTerminal(@PathVariable Long id) {
        terminalService.deleteTerminal(id);
        return ResponseEntity.noContent().build();
    }


    // Get terminal by name
    @GetMapping("/{nom}")
    public ResponseEntity<Terminal> getTerminalByNom(@PathVariable String nom) {
        Terminal terminal = terminalService.getTerminalByNom(nom);
        if (terminal != null) {
            return ResponseEntity.ok(terminal);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
