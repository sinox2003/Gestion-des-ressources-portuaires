package org.example.stageback.controller.parametrage;


import org.example.stageback.model.parametrage.ModeTravail;
import org.example.stageback.service.parametrage.ModeTravailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/modeTravail")
public class ModeTravailController {

    private final ModeTravailService modeTravailService;
    public ModeTravailController(ModeTravailService modeTravailService) {
        this.modeTravailService = modeTravailService;
    }

    @GetMapping
    public ResponseEntity<List<ModeTravail>> getModeTravails(){
        return ResponseEntity.ok(modeTravailService.getAllModeTravails());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ModeTravail> getModeTravailById(@PathVariable Long id){
        return ResponseEntity.ok(modeTravailService.getModeTravail(id));
    }

    @PostMapping
    public ResponseEntity<ModeTravail> createModeTravail(@RequestBody ModeTravail modeTravail){
        return ResponseEntity.ok(modeTravailService.saveOrUpdate(modeTravail));
    }

    @PutMapping
    public ResponseEntity<ModeTravail> updateModeTravail(@RequestBody ModeTravail modeTravail){
        return ResponseEntity.ok(modeTravailService.saveOrUpdate(modeTravail));
    }

}
