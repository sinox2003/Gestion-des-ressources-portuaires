package org.example.stageback.controller.parametrage;

import com.fasterxml.jackson.annotation.JsonView;
import org.example.stageback.Views.Views;
import org.example.stageback.model.parametrage.Equipe;
import org.example.stageback.service.parametrage.EquipeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/equipes")
public class EquipeController {

    private final EquipeService equipeService;

    public EquipeController(EquipeService equipeService) {
        this.equipeService = equipeService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Equipe> getEquipeById(@PathVariable String id) {
        Equipe equipe = equipeService.getEquipeById(id);
        return equipe != null ? ResponseEntity.ok(equipe) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Equipe> createEquipe(@RequestBody Equipe equipe) {
        Equipe savedEquipe = equipeService.saveOrUpdate(equipe);
        return ResponseEntity.ok(savedEquipe);
    }

    @PutMapping("")
    public ResponseEntity<Equipe> updateEquipe( @RequestBody Equipe equipe) {
        return equipe != null ? ResponseEntity.ok(equipeService.saveOrUpdate(equipe)) : ResponseEntity.notFound().build();

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEquipe(@PathVariable String id) {
        equipeService.deleteEquipeById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Equipe>> getAllEquipes() {
        List<Equipe> equipes = equipeService.getAllEquipes();
        return ResponseEntity.ok(equipes);
    }
}
