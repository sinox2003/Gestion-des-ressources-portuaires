package org.example.stageback.controller.parametrage;

import org.example.stageback.service.parametrage.ParametrageRessourceMaterielleService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/parametrage/ressources_materielles")
public class ParametrageRessourceMaterielleController {

    private final ParametrageRessourceMaterielleService service;

    public ParametrageRessourceMaterielleController(ParametrageRessourceMaterielleService service) {
        this.service = service;
    }



}
