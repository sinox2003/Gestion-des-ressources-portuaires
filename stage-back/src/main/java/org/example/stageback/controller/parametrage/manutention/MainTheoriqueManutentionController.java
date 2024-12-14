package org.example.stageback.controller.parametrage.manutention;

import org.example.stageback.service.parametrage.manutention.MainTheoriqueManutentionService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/parametrage/manutention/main_theorique")
public class MainTheoriqueManutentionController {

    private final MainTheoriqueManutentionService service;

    public MainTheoriqueManutentionController(MainTheoriqueManutentionService service) {
        this.service = service;
    }

    @DeleteMapping("/{id}")
    public void deleteMainTheoriqueManutention(@PathVariable Long id) {
        service.deleteById(id);
    }

}
