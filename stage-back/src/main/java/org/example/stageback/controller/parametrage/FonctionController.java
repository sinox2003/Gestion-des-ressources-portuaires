package org.example.stageback.controller.parametrage;


import org.example.stageback.model.parametrage.Fonction;
import org.example.stageback.service.parametrage.FonctionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fonctions")
public class FonctionController {

    private final FonctionService fonctionService;
    public FonctionController(FonctionService fonctionService) {
        this.fonctionService = fonctionService;
    }

    @GetMapping
    public ResponseEntity<List<Fonction>> getFonctions(){
        return ResponseEntity.ok(fonctionService.getFonctionList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Fonction> getFonctionById(@PathVariable Long id){
        return ResponseEntity.ok(fonctionService.getFonctionById(id));
    }

    @PostMapping
    public ResponseEntity<Fonction> createFonction(@RequestBody Fonction fonction){
        return ResponseEntity.ok(fonctionService.saveOrUpdate(fonction));
    }

    @PutMapping
    public ResponseEntity<Fonction> updateFonction(@RequestBody Fonction fonctionDetails){
        return ResponseEntity.ok(fonctionService.saveOrUpdate(fonctionDetails));
    }

}
