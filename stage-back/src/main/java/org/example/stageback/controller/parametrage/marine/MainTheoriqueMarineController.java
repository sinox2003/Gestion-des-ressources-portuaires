package org.example.stageback.controller.parametrage.marine;

import org.example.stageback.model.parametrage.marine.MainTheoriqueMarine;
import org.example.stageback.service.parametrage.marine.MainTheoriqueMarineService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/parametrage/marine/main_theorique")
public class MainTheoriqueMarineController {

    private final MainTheoriqueMarineService service;


    public MainTheoriqueMarineController(MainTheoriqueMarineService service) {
        this.service = service;
    }

    @DeleteMapping("/{id}")
    public void deleteMainTheoriqueMarine(@PathVariable Long id) {
        service.deleteById(id);
    }

    @PostMapping
    public ResponseEntity<MainTheoriqueMarine> updateMainTheoriqueMarine(@RequestBody MainTheoriqueMarine mainTheoriqueMarine){
        MainTheoriqueMarine main=service.saveOrUpdate(mainTheoriqueMarine);
        return main==null ? ResponseEntity.notFound().build() : ResponseEntity.ok(main);
    }

}
