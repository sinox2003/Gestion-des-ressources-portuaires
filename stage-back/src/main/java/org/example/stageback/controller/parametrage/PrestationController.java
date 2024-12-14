package org.example.stageback.controller.parametrage;

import org.example.stageback.model.parametrage.Prestation;
import org.example.stageback.service.parametrage.PrestationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/prestations")
public class PrestationController {

    private final PrestationService prestationService;

    public PrestationController(PrestationService prestationService) {
        this.prestationService = prestationService;
    }

    @GetMapping
    List<Prestation> getPrestations() {
        return prestationService.getPrestations();
    }

    @GetMapping("/{id}")
    Prestation getPrestation(@PathVariable Long id) {
        return prestationService.getPrestationById(id);
    }

    @GetMapping("/manutention")
    List<Prestation> getManutention_Prestations() {
        return prestationService.getManutention_Prestations();
    }

    @GetMapping("/marine")
    List<Prestation> getMarine_Prestations() {
        return prestationService.getMarine_Prestations();
    }
}
